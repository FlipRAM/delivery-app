import React, { useState, useEffect } from 'react';

const NAME_MIN = 12;
const PASSWORD_MIN = 6;
const RETURN_STATUS = 404;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [formValuesIsInvalid, setFormValuesIsInvalid] = useState(true);
  const [returnPost, setReturnPost] = useState({
    hasToken: false,
    method: 'POST',
    status: 200 });

  const emailValidate = (emailToValidate) => emailToValidate
    .match(/^\w+([-+.’]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

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

  const postRegisterApi = async (data) => {
    const customAlert = alert;
    try {
      await axios.post(('http://localhost:3001/register'), {
        ...data,
      });
      return { hasToken: false, method: 'POST', status: err.response.status };
    } catch (err) {
      customAlert('Erro inesperado, ou as informações estão incorretas');
      return { hasToken: false, method: 'POST', status: err.response.status };
    }
  };

  const handlePostRegisterApi = async () => {
    const returnApi = await postRegisterApi({ name, email, password });
    setReturnPost(returnApi);
  };

  return (
    <div className="bg-green-600">
      <form>
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
        <button
          data-testid="common_register__button-register"
          type="button"
          disabled={ formValuesIsInvalid }
          onClick={ handlePostRegisterApi }
        >
          CADASTRAR
        </button>
        <button
          type="button"
          style={ { display: returnPost.status !== RETURN_STATUS
            ? 'none' : 'block' } }
          data-testid="common_register__element-invalid-register"
        >
          opasassssssssssssssssss
        </button>
      </form>
    </div>
  );
}

export default Register;
