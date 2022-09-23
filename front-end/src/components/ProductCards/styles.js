import styled from 'styled-components';

export const ProductCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 80%;
  height: fit-content;
  margin-top: 30px;

  .checkout {
    background: #036B52;
    bottom: 80px;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 16px;
    position: fixed;
    right: 80px;
    width: 340px;
    z-index: 99;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 235px;
  height: 320px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
  overflow: hidden;
  border-radius: 4px;

  :hover {
    transform: translateY(-1px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
    filter: brightness(1.05);
  }
  
  .thumb {
    overflow: hidden;
    height: 70%;
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
    background: #fdfdfd;
    border-radius: 8px;
    padding: 4px;
  }
  
  .infoOptions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 12px 4px 20px 4px;
    flex: 1;
    width: 100%;
    background: #e8f2ef;

    
    .product-name {
      font-size: 1rem;
    }
    
    .quantity {
      display: flex;
      justify-content: space-between;
      height: 32px;
      border: 1px solid #036B52;
      border-radius: 8px;
      overflow: hidden;
    
      
      input {
        width: 40px;
        text-align: center;
        border: none;
        appearance: none;
      }

      button {
        background: #036B52;
        font-weight: 800;
        color: white;
        height: 32px;
        width: 32px;
        border: none;
      }
      
      color: black;
    }
  }
`;
