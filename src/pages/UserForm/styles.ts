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
  align-items: center;

  button {
    height: 50px;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
`;
