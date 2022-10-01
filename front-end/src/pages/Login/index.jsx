import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonRegister from '../../components/ButtonRegister';
import { useAppContext } from '../../Context/APIProvider';
import emailValidate from '../../helpers/emailRegexValidate';
import { postLoginApi, confirmUser } from '../../services/API';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import { LoginButton, LoginContainer, LoginForm } from './styles';

const PASSWORD_MIN = 6;
const RETURN_NOT_FOUND_STATUS = 404;
const RETURN_SUCCESS_STATUS = 200;
const INITIAL_STATUS = 0;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValuesIsInvalid, setFormValuesIsInvalid] = useState(true);
  const { setUserData } = useContext(useAppContext);
  const [statusReturned, setStatusReturned] = useState(INITIAL_STATUS);
  const navigate = useNavigate();
  const customAlert = alert;

  useEffect(() => {
    const customerURL = {
      customer: ['customer', 'products'],
      seller: ['seller', 'orders'],
      administrator: ['admin', 'manage'],
    };
    const checkIfLogged = async () => {
      const userLocal = getUserFromLocalStorage('user');
      if (userLocal) {
        const validUser = await confirmUser(userLocal.token);

        if (validUser instanceof AxiosError) {
          customAlert('token invalido');
        }
        if (validUser) {
          return navigate(
            `/${customerURL[userLocal.role][0]}/${customerURL[userLocal.role][1]}`,
          );
        }
      }
    };
    checkIfLogged();
  }, [customAlert, navigate]);

  useEffect(() => {
    if (emailValidate(email) && password.length >= PASSWORD_MIN) {
      setFormValuesIsInvalid(false);
    } else {
      setFormValuesIsInvalid(true);
    }
  }, [email, password]);

  const handlePostLoginApi = async (event) => {
    event.preventDefault();
    const apiResults = await postLoginApi({ email, password });

    if (apiResults instanceof AxiosError) {
      return setStatusReturned(apiResults.response.status);
    }

    setUserData(apiResults);

    if (apiResults.status === RETURN_SUCCESS_STATUS
      && apiResults.data.role === 'customer') {
      navigate('/customer/products');
    }
    if (apiResults.status === RETURN_SUCCESS_STATUS
      && apiResults.data.role === 'seller') {
      navigate('/seller/orders');
    }
    if (apiResults.status === RETURN_SUCCESS_STATUS
      && apiResults.data.role === 'administrator') {
      navigate('/admin/manage');
    }
  };

  return (
    <LoginContainer className="login-container">
      <LoginForm className="login-form">
        <p>Login</p>
        <input
          id="email"
          data-testid="common_login__input-email"
          name="email"
          required
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
          type="email"
          placeholder="email@trybeer.com.br"
        />

        <p>Senha</p>
        <input
          data-testid="common_login__input-password"
          name="password"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
          type="password"
          placeholder="********"
        />

        <LoginButton
          isDisable={ formValuesIsInvalid }
          className="btn-login"
          data-testid="common_login__button-login"
          type="submit"
          disabled={ formValuesIsInvalid }
          onClick={ handlePostLoginApi }
        >
          Login

        </LoginButton>
        <ButtonRegister />

        {statusReturned === RETURN_NOT_FOUND_STATUS
          ? (
            <span
              data-testid="common_login__element-invalid-email"
            >
              Informações incorretas
            </span>
          ) : ''}

      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
