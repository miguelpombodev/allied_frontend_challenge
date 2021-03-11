import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled(Field)`
  width: 300px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  text-align: center;

  margin-top: 13px;
`;
