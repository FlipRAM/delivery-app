import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useResolvedPath } from 'react-router';
import { useAppContext } from '../../Context/APIProvider';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import HeaderContainer from './styles';

export default function Header() {
  const { userLog } = useContext(useAppContext);
  const [userInfo, setUserInfo] = useState(userLog);
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();

  useEffect(() => {
    if (getUserFromLocalStorage('user') && !userLog) {
      setUserInfo(getUserFromLocalStorage('user'));
    }
    if (userLog) {
      setUserInfo(userLog);
    }
  }, [userLog]);

  const handleLogoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navigateToPath = (request) => {
    navigate(`/${userInfo.role}/${request}`);
  };

  return (
    <HeaderContainer>
      <div className="nav-left">
        {
          pathname.split('/')[1] !== 'seller' && (
            <button
              data-testid="customer_products__element-navbar-link-products"
              className="nav-left-items produtos"
              type="button"
              onClick={ () => navigateToPath('products') }
            >
              PRODUTOS
            </button>
          )
        }
        <button
          data-testid="customer_products__element-navbar-link-orders"
          className="nav-left-items pedidos"
          type="button"
          onClick={ () => navigateToPath('orders') }
        >
          MEUS PEDIDOS
        </button>
      </div>

      <div className="nav-right">
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="nav-right-items user"
        >
          { userInfo ? userInfo.name : 'nao atualizou' }
        </p>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          className="nav-right-items sair"
          type="button"
          onClick={ handleLogoutUser }
        >
          SAIR
        </button>
      </div>
    </HeaderContainer>
  );
}
