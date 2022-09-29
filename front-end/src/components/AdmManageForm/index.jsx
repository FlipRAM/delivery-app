import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, FormContentContainer } from './styles';

const USER_TYPE = ['administrator', 'customer', 'seller'];

export default function FormAdmManager() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });
  console.log(isValid);

  return (
    <FormContentContainer>
      <h1>Cadastrar novo usuário</h1>
      <FormContainer
        onSubmit={ handleSubmit((data) => {
          console.log(data);
        }) }

      >
        <label htmlFor="nome">
          Nome
          <input
            { ...register(
              'nome',
              {
                required: true,
                minLength: {
                  value: 12,
                  message: 'Seu nome completo de ter no mínimo 12 caracteres',
                } },
            ) }
            data-testid="admin_manage__input-name"
            id="nome"
            type="text"
            placeholder="Nome e sobrenome"
          />
          {errors.nome && <p role="alert">{errors.nome?.message}</p>}
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

        <label htmlFor="senha">
          Senha
          <input
            { ...register('senha', {
              required: true,
              minLength: {
                value: 6,
                message: 'Sua senha deve ter no mínimo 6 caracteres',
              },
            }) }
            data-testid="admin_manage__input-password"
            id="senha"
            type="password"
            placeholder="********"
          />
          {errors.senha && <p role="alert">{errors.senha?.message}</p>}
        </label>
        <label htmlFor="tipo">
          Tipo
          <select
            { ...register('tipo', { required: true }) }
            id="tipo"
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
          data-testis="admin_manage__element-invalid-register"
          disabled={ false }
        >
          error message

        </span>
      </FormContainer>
    </FormContentContainer>
  );
}
