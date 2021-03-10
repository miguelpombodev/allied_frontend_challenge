import React, {
  FormEvent,
  FormEventHandler,
  FormHTMLAttributes,
  useCallback,
  useRef,
} from 'react';
// import { useLocation } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, FormPlatform } from './styles';

// import { UserChoose } from '../FormPlatformPlans/interfaceFormPlatformPlans';

// interface UserData extends UserChoose {
//   nomeUsuario: string;
//   emailUsuario: string;
//   cpfUsuario: string;
//   dtNascUsuario: string;
//   telefonecUsuario: string;
// }

const UserForm: React.FC = () => {
  // const [userData, setUserData] = useState<UserData>();
  const formRef = useRef<HTMLFormElement | null>(null);
  // const { state } = useLocation();

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    const a = formRef.current;

    // const userData = { ...state };
    // setUserData();
  }, []);

  return (
    <Container>
      <FormPlatform ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Data de Nascimento" />
          <Input placeholder="CPF" />
          <Input placeholder="Telefone" />
        </div>
        <button type="submit">Enviar</button>
      </FormPlatform>
    </Container>
  );
};

export default UserForm;
