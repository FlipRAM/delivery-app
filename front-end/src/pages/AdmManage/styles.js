import styled from 'styled-components';

const AdmManageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 75vh;
    border: 1px solid red;
  }
`;

export default AdmManageContainer;
