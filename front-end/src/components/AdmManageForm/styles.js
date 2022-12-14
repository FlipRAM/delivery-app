import styled from 'styled-components';

export const FormContentContainer = styled.div`
  width: 95%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  flex: 1;
  
  border: 1px solid blue;

  h1 {
    font-size: 2rem;
    align-self: flex-start;
    margin: 8px 0;
  }
`;

export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;


  .inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    
    label {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 4px;
      
      input {
        flex: 1;
        min-width: 200px;
        height: 36px;
        padding: 8px;
      }
      
      
    }
    
    select {
      min-width: 200px;
      height: 3rem;
      padding-left: 8px;
      
      align-self: center;
    }
  }
    
    button {
      width: fit-content;
    height: 43px;
    border-radius: 8px;
    padding: 8px 32px;
    background: #036B52;
    color: #f9f9f9;
    font-weight: 400;

    :hover {
      transition: 0.3s;
      filter: brightness(1.2);
      
    } 

    :disabled {
      color: yellow;
    }

  }

  .error-message {
    position: absolute;
    top: -60px;
    left: 60%;
    transform: translateX(-50%);
    color: red;
    font-size: 1.3rem;
    padding: 4px 16px;
    border: 1px solid red;
    z-index: 999;
  }
`;
