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

  button {
    height: 50px;
  }
`;

export const RadioOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 50px;

    p {
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
    }
  }
`;
