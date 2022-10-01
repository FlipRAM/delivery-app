import styled from 'styled-components';

const CustomerOrdersContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .sales-list-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 600px;
    gap: 32px;
    border: 1px solid red;
    overflow-y: scroll;


    .sales-card-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      flex: 1;
      height: fit-content;
      border: 1px solid;
    }
  }
`;

export default CustomerOrdersContainer;
