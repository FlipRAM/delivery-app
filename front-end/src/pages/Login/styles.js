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
  gap: 4px;
  height: 300px;
  justify-content: space-evenly;
  padding: 16px;
  width: 300px;

  label {
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #001813;
    display: inline-block;
    height: 43px;
    padding: 8px;
  }

  button {
    background: #036B52;
    border-radius: 10px;
  }
`;
