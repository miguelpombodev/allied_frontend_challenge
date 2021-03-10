import React, { InputHTMLAttributes } from 'react';
import { FieldAttributes, FieldConfig } from 'formik';

import { Input } from './styles';

interface InputProps
  extends FieldConfig<InputHTMLAttributes<HTMLInputElement>> {
  type: string;
  placeholder: string;
}

const InputComponent: React.FC<InputProps> = ({
  type,
  placeholder,
  ...rest
}) => {
  return <Input type={type} placeholder={placeholder} {...rest} />;
};

export default InputComponent;
