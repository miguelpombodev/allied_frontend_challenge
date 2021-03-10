import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 15px auto;
  justify-content: space-evenly;
  align-items: center;

  width: 50%;

  border-bottom: 1px solid #cccc;
`;

export const FormPlatform = styled.form`
  display: flex;
  margin: 15px 0 15px 0;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  button {
    height: 50px;
  }
`;
