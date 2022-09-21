import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonRegister() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <button
      data-testid="common_login__button-register"
      type="button"
      onClick={ navigateToRegister }
    >
      Ainda não tenho conta
    </button>
  );
}

export default ButtonRegister;
