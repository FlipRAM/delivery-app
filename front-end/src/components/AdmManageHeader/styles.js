import styled from 'styled-components';

const AdmHeaderContainer = styled.div`
  background: #036B52;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  min-height: 60px;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;

  .nav-left {
    display: flex;

    
    .nav-left-items {

      font-weight: 600;
      width: 200px;
      height: 100%;
    }
    
    .manage-users {
      background: #00cf91;
      color: black;
      border: none;
      
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
    
    .user-adm {
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

export default AdmHeaderContainer;
