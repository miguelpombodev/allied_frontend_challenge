import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  icon: React.ComponentType<IconBaseProps>;
}

const InputComponent: React.FC<InputProps> = ({
  type,
  placeholder,
  icon: Icon,
  name,
  ...rest
}) => {
  return (
    <Container>
      {Icon && <Icon size={25} />}
      <Input name={name} type={type} placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default InputComponent;
