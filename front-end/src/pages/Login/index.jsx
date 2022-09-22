import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonRegister from '../../components/ButtonRegister';
import { useAppContext } from '../../Context/APIProvider';
import emailValidate from '../../helpers/emailRegexValidate';
import { postLoginApi } from '../../services/API';
import { LoginContainer, LoginForm } from './styles';

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

  useEffect(() => {
    if (emailValidate(email) && password.length >= PASSWORD_MIN) {
      setFormValuesIsInvalid(false);
    } else {
      setFormValuesIsInvalid(true);
    }
  }, [email, password]);

  useEffect(() => {
    if (statusReturned === RETURN_SUCCESS_STATUS) {
      navigate('/customer/products');
    }
  }, [navigate, statusReturned]);

  const handlePostLoginApi = async (event) => {
    event.preventDefault();
    const apiResults = await postLoginApi({ email, password });

    if (apiResults instanceof AxiosError) {
      setStatusReturned(apiResults.response.status);
      return { hasToken: false, method: 'POST', status: apiResults.response.status };
    }

    setUserData(apiResults);
    setStatusReturned(apiResults.status);
    return { hasToken: false, method: 'POST', status: apiResults.status };
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

        <button
          className="btn-login"
          data-testid="common_login__button-login"
          type="submit"
          disabled={ formValuesIsInvalid }
          onClick={ handlePostLoginApi }
        >
          Login

        </button>
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
