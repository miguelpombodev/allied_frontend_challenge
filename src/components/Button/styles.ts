import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  background-color: #ffcb47;
  color: #fff;

  width: 100px;
  height: 40px;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #cccc;
      cursor: no-drop;
    `}
`;
