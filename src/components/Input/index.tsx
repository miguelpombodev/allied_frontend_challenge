import React, { InputHTMLAttributes } from 'react';

import { Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const InputComponent: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  ...rest
}) => {
  return <Input name={name} type={type} placeholder={placeholder} {...rest} />;
};

export default InputComponent;
