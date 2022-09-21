import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);

  return (
    <div className="bg-green-600">
      <form>
        <label htmlFor="email">
          Login
          <input
            data-testid="common_login__input-email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
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
            onChange={ (e) => setPassword(e.target.value) }
            type="password"
            placeholder="********"
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
        >
          Login

        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta

        </button>
        <p
          data-testid="common_login__element-invalid-email"
        />
      </form>
    </div>
  );
}

export default Login;