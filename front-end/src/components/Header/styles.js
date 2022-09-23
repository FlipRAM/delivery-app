import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #036B52;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  min-height: 60px;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  z-index: 999;

  .nav-left {
    display: flex;

    
    .nav-left-items {

      font-weight: 600;
      width: 200px;
      height: 100%;
    }
    
    .produtos {
      background: #00cf91;
      color: black;
      border: none;
      
    }
    
    .pedidos {
      background: #036B52;
      color: white;
      border: none;
      height: 100%;
      
      :hover {
        filter: brightness(1.2);
      }
    }
  }

  .nav-right {
    display: flex;
    font-weight: 600;

    width: fit-content;
    
    .nav-right-items {
      height: 100%;
      width: 200px;
    }
    
    .user {
      align-items: center;
      background: #540082;
      display: flex;
      justify-content: center;
      padding: 0 8px;
      
    }
    
    .sair {
      background: #3e26fc;
      color: white;
      font-weight: 600;
      width: 100px;
      border: none;
      padding: 0 8px;

      :hover {
        filter: brightness(5);
      }
    }
  }
`;

export default HeaderContainer;
