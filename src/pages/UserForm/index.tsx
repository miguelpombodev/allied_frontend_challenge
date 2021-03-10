import React, {
  FormEvent,
  FormEventHandler,
  FormHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { Formik, FormikHelpers, Field } from 'formik';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, FormPlatform } from './styles';

import { UserChoose } from '../FormPlatformPlans/interfacesFormPlatformPlans';

interface UserData extends UserChoose {
  values: {
    nomeUsuario: string;
    emailUsuario: string;
    cpfUsuario: string;
    dtNascUsuario: string;
    telefoneUsuario: string;
  };
}

interface Values {
  nomeUsuario: string;
  emailUsuario: string;
  cpfUsuario: string;
  dtNascUsuario: string;
  telefoneUsuario: string;
}

const schema = Yup.object().shape({
  nome: Yup.string().required(),
  email: Yup.string().required(),
  dt_nasc: Yup.string().required(),
  cpf: Yup.string().required().max(11),
  telefone: Yup.string().required(),
});

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>();
  const { state } = useLocation<UserChoose>();

  const initialValues: Values = {
    nomeUsuario: '',
    emailUsuario: '',
    dtNascUsuario: '',
    cpfUsuario: '',
    telefoneUsuario: '',
  };

  const handleUserDataSubmit = useCallback((values: Values) => {
    const userDataLocation = { values, ...state };
    setUserData(userDataLocation);
    console.log(userData);
  }, []);

  return (
    <Container>
      <Formik
        key={1}
        initialValues={initialValues}
        onSubmit={(values: Values) => {
          handleUserDataSubmit(values);
        }}
      >
        {({ errors, handleSubmit }) => (
          <FormPlatform onSubmit={handleSubmit}>
            <Input name="nomeUsuario" type="type" placeholder="Nome" />
            <Input name="emailUsuario" type="type" placeholder="Email" />
            <Input
              name="dtNascUsuario"
              type="type"
              placeholder="Data de Nascimento"
            />
            <Input name="cpfUsuario" type="type" placeholder="CPF" />
            <Input name="telefoneUsuario" type="type" placeholder="Telefone" />
            <Button disabled={false} type="submit">
              Enviar
            </Button>
          </FormPlatform>
        )}
      </Formik>
    </Container>
  );
};

export default UserForm;
