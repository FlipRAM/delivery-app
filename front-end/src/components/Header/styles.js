import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #036B52;
  color: white;
  display: flex;
  min-height: 60px;
  max-height: 60px;
  justify-content: space-between;
  width: 100%;

  .nav-left {
    height: 100%;
    width: fit-content;
    
    .nav-left-items {
      font-weight: 600;
      height: 100%;
      width: 200px;
    }
    
    .produtos {
      background: #00cf91;
      color: black;
      border: none;
    }
    
    .pedidos {
      background: transparent;
      color: white;
      border: none;
    }
  }

  .nav-right {
    display: flex;
    font-weight: 600;
    height: 100%;
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
      
    }
    
    .sair {
      background: #3e26fc;
      color: white;
      font-weight: 600;
      width: 100px;
      border: none;
    }
  }
`;

export default HeaderContainer;
