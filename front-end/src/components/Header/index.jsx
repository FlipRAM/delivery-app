import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/APIProvider';
import HeaderContainer from './styles';

export default function Header() {
  const { userData } = useContext(useAppContext);
  const navigate = useNavigate();
  console.log(userData);

  return (
    <HeaderContainer>
      <div className="nav-left">
        <button
          className="nav-left-items produtos"
          type="button"
        >
          PRODUTOS
        </button>
        <button
          className="nav-left-items pedidos"
          type="button"
        >
          MEUS PEDIDOS
        </button>
      </div>

      <div className="nav-right">
        <p
          className="nav-right-items user"
        >
          {userData.data.name}
        </p>
        <button
          className="nav-right-items sair"
          type="button"
          onClick={ navigate('/login') }
        >
          SAIR
        </button>
      </div>
    </HeaderContainer>
  );
}
