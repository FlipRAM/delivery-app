import styled from 'styled-components';

export const ProductCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 80%;
  height: fit-content;
  border: 1px solid;
  margin-top: 30px;

  .checkout {
    background: #036B52;
    bottom: 200px;
    color: white;
    height: 43px;
    position: fixed;
    right: 200px;
    width: 240px;
    z-index: 99;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 180px;
  height: 260px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  .thumb {
    overflow: hidden;
    height: 75%;
    max-width: 100%;
    object-fit: fit-content;
  }
  
  .price {
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 1.4rem;
    font-weight: 700;
    color: black;
  }
  
  .infoOptions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 40px;
    width: 100%;
    border: 2px solid blue;
    
    .product-name {
      font-size: 0.5em;
    }
    
    .quantity {
      display: flex;
      justify-content: space-between;
      height: 32px;
    
      
      input {
        width: 40px;
        text-align: center;
      }

      button {
        background: #036B52;
        font-weight: 800;
        color: white;
        height: 32px;
        width: 32px;
      }
      
      color: black;
    }
  }
`;
