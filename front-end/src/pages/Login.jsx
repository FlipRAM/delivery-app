import React, { useState, useEffect } from 'react';
import emailValidate from '../helpers/emailRegexValidate';
import postLoginApi from '../services/API';

const PASSWORD_MIN = 6;
const RETURN_STATUS = 404;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValuesIsInvalid, setFormValuesIsInvalid] = useState(true);
  const [returnPost, setReturnPost] = useState({
    hasToken: false,
    method: 'POST',
    status: 200 });
  console.log(returnPost);

  useEffect(() => {
    if (emailValidate(email) && password.length >= PASSWORD_MIN) {
      setFormValuesIsInvalid(false);
    } else {
      setFormValuesIsInvalid(true);
    }
  }, [email, password]);

  const handlePostLoginApi = async () => {
    const returnApi = await postLoginApi({ email, password });
    setReturnPost(returnApi);
  };

  return (
    <div className="bg-green-600">
      <form>
        <label htmlFor="email">
          Login
          <input
            data-testid="common_login__input-email"
            name="email"
            required
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
            type="email"
            placeholder="email@trybeer.com.br"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="common_login__input-password"
            name="password"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
            type="password"
            placeholder="********"
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ formValuesIsInvalid }
          onClick={ handlePostLoginApi }
        >
          Login

        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta

        </button>
        <button
          type="button"
          style={ { display: returnPost.status !== RETURN_STATUS
            ? 'none' : 'block' } }
          data-testid="common_login__element-invalid-email"
        >
          opasassssssssssssssssss

        </button>
      </form>
    </div>
  );
}

export default Login;
