import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  display: flex;
  margin: 15px auto;
  justify-content: space-evenly;
  align-items: center;

  width: 50%;

  border-bottom: 1px solid #cccc;
`;

export const FormPlatform = styled(Form)`
  display: flex;
  margin: 15px 0 15px 0;
  flex-direction: column;

  button {
    height: 50px;
  }
`;
