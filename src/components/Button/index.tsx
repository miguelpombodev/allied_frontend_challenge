import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  disabled,
  children,
  ...rest
}) => {
  return (
    <Button type="button" disabled={disabled} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
