import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';

const ButtonComponent: React.FC<ButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default ButtonComponent;
