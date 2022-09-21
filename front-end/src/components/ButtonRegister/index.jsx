import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonRegisterContainer from './styles';

function ButtonRegister() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <ButtonRegisterContainer
      data-testid="common_login__button-register"
      type="button"
      onClick={ navigateToRegister }
    >
      Ainda não tenho conta
    </ButtonRegisterContainer>
  );
}

export default ButtonRegister;
