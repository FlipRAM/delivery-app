import styled from 'styled-components';

const SellerOrdersContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .seller-orders-container{
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;

    .seller-orders{
      border: 1px solid;
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      
      height: 33px;
    }
  }
`;
export default SellerOrdersContainer;
