import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppContext } from '../../Context/APIProvider';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import { saveNewUserApi } from '../../services/API';
import { FormContainer, FormContentContainer } from './styles';

const USER_TYPE = ['administrator', 'customer', 'seller'];
const RETURN_USER_DUPLICATE_STATUS = 409;
const INITIAL_STATUS = 0;
const ERROR_MSG_TIMER = 2000;

export default function FormAdmManager() {
  const { setUserList } = useContext(useAppContext);
  const [user, setUser] = useState(undefined);
  const [statusReturned, setStatusReturned] = useState(INITIAL_STATUS);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    if (getUserFromLocalStorage('user') && !user) {
      setUser(getUserFromLocalStorage('user'));
    }
  }, [user]);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const result = await saveNewUserApi(data, user.token);

    if (result instanceof AxiosError) {
      setStatusReturned(result.response.status);

      setTimeout(() => {
        setStatusReturned(INITIAL_STATUS);
      }, ERROR_MSG_TIMER);
    }

    setUserList(result.data);
  };

  return (
    <FormContentContainer>
      <h1>Cadastrar novo usuário</h1>
      <FormContainer
        onSubmit={ handleSubmit(onSubmit) }
      >
        <label htmlFor="name">
          Nome
          <input
            { ...register(
              'name',
              {
                required: true,
                minLength: {
                  value: 12,
                  message: 'Seu nome completo de ter no mínimo 12 caracteres',
                } },
            ) }
            data-testid="admin_manage__input-name"
            id="name"
            type="text"
            placeholder="Nome e sobrenome"
          />
          {errors.name && <p role="alert">{errors.name?.message}</p>}
        </label>

        <label htmlFor="email">
          Email
          <input
            { ...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            }) }
            aria-invalid={ errors.mail ? 'true' : 'false' }
            placeholder="seu-email@site.com"
            data-testid="admin_manage__input-email"
            id="email"
          />
          {errors.mail && <p role="alert">{errors.email?.message}</p>}
        </label>

        <label htmlFor="password">
          Senha
          <input
            { ...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Sua senha deve ter no mínimo 6 caracteres',
              },
            }) }
            data-testid="admin_manage__input-password"
            id="password"
            type="password"
            placeholder="********"
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
        </label>
        <label htmlFor="role">
          Tipo
          <select
            { ...register('role', { required: true }) }
            id="role"
            data-testid="admin_manage__select-role"
          >
            <option value="">Selecione o tipo (role)</option>
            {USER_TYPE
              .map((each, i) => <option key={ each + i } value={ each }>{each}</option>)}
          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ !isValid }
        >
          CADASTRAR
        </button>

        <span
          className="error-message"
          data-testid="admin_manage__element-invalid-register"
          disabled={ statusReturned !== RETURN_USER_DUPLICATE_STATUS }
        >
          {statusReturned === RETURN_USER_DUPLICATE_STATUS
            && 'Nome ou Email ja cadastrado'}

        </span>
      </FormContainer>
    </FormContentContainer>
  );
}
