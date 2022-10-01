import { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import emailValidate from '../../helpers/emailRegexValidate';
import { postRegisterApi } from '../../services/API';
import { RegisterButton, RegisterContainer, RegisterForm } from './styles';

const NAME_MIN = 12;
const PASSWORD_MIN = 6;
const RETURN_CONFLICT_STATUS = 409;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [formValuesIsInvalid, setFormValuesIsInvalid] = useState(true);
  const [returnPost, setReturnPost] = useState({
    hasToken: false,
    method: 'POST',
    status: 200 });

  const navigate = useNavigate();

  const navigateToCustomerProducts = () => {
    navigate('/customer/products');
  };

  useEffect(() => {
    if (
      emailValidate(email)
      && name.length >= NAME_MIN
      && password.length >= PASSWORD_MIN
    ) {
      setFormValuesIsInvalid(false);
    } else {
      setFormValuesIsInvalid(true);
    }
  }, [name, email, password]);

  const handlePostRegisterApi = async () => {
    const returnApi = await postRegisterApi({ name, email, password });

    if (returnApi instanceof AxiosError) {
      return setReturnPost(returnApi.response.status);
    }

    navigateToCustomerProducts();
  };

  return (
    <RegisterContainer>
      <RegisterForm>
        <label htmlFor="name">
          Nome
          <input
            data-testid="common_register__input-name"
            name="name"
            required
            value={ name }
            onChange={ (e) => setName(e.target.value) }
            type="text"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            type="email"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="common_register__input-password"
            name="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            type="password"
            placeholder="********"
          />
        </label>
        <RegisterButton
          data-testid="common_register__button-register"
          type="button"
          disabled={ formValuesIsInvalid }
          onClick={ handlePostRegisterApi }
        >
          CADASTRAR
        </RegisterButton>

        {returnPost === RETURN_CONFLICT_STATUS
          ? (
            <span
              data-testid="common_register__element-invalid_register"
            >
              Email ou nome já cadastrados
            </span>
          ) : ''}
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
