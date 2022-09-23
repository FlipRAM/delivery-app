import styled from 'styled-components';

export const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const LoginForm = styled.form`
  background: #EAF1EF;
  border: 1px solid #B1C2BE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  gap: 12px;
  height: 332px;
  justify-content: center;
  padding: 16px;
  width: 300px;
  max-width: 80%;

  span {
    display: block;
    font-weight: 500;
    padding-left: 16px;
    color: red;
    text-align: center;
    animation: loginError 1.4s ease-in-out;

    @keyframes loginError {
      0% { transform: translateX(1px) }
      20% { transform: translateX(-2px) }
      40% { transform: translateX(2px) }
      60% { transform: translateX(-2px) }
      80% { transform: translateX(2px) }
      100% { transform: translateX(-1px) }
      
    }
  }

  input {
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #001813;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: black;
    min-height: 36px;
    padding: 8px;
  }

  .btn-login {
    
  }
`;

export const LoginButton = styled.button`
  background: #036B52;
  border-radius: 8px;
  color: white;
  font-size: 1.4rem;
  margin: 8px 0;
  padding: 8px;

  :hover {
    filter: brightness(1.2);
  }
`;
