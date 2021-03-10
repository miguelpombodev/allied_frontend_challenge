import React from 'react';
import Input from '@material-ui/core/Input';
import { InputBaseProps } from '@material-ui/core/InputBase';

const InputComponent: React.FC<InputBaseProps> = ({ ...rest }) => {
  return <Input {...rest} />;
};

export default InputComponent;
