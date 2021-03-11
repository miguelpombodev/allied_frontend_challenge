import React, { useCallback, useState, useContext } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useLocation, useHistory } from 'react-router-dom';
import {
  MdPerson,
  MdEmail,
  MdDateRange,
  MdLock,
  MdPhone,
} from 'react-icons/md';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, FormPlatform, ErrorMessage } from './styles';

import { UserData, Values, UserChooseData } from './interfacesUserForm';

import schema from './yupSchema';

import { UsersSavedContext } from '../../context/UsersSaved';

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>();
  const { state } = useLocation<UserChooseData>();
  const history = useHistory();

  const { addUsersSaved } = useContext(UsersSavedContext);

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
    console.log(userDataLocation);
    addUsersSaved(values, state.sku, state.planName);
    history.push('/');
  }, []);

  const formik = useFormik<Values>({
    initialValues,
    onSubmit: handleUserDataSubmit,
    validationSchema: schema,
  });

  return (
    <Container>
      <FormikProvider value={formik}>
        <FormPlatform onSubmit={formik.handleSubmit}>
          <Input
            icon={MdPerson}
            name="nomeUsuario"
            type="type"
            placeholder="Nome"
            onBlur={formik.handleBlur}
          />
          {formik.touched.nomeUsuario && formik.errors.nomeUsuario ? (
            <ErrorMessage>{formik.errors.nomeUsuario}</ErrorMessage>
          ) : null}
          <Input
            icon={MdEmail}
            name="emailUsuario"
            type="type"
            placeholder="Email"
            onBlur={formik.handleBlur}
          />
          {formik.touched.emailUsuario && formik.errors.emailUsuario ? (
            <ErrorMessage>{formik.errors.emailUsuario}</ErrorMessage>
          ) : null}
          <Input
            icon={MdDateRange}
            name="dtNascUsuario"
            type="type"
            placeholder="Data de Nascimento - e.g: 30-06-2002"
            onBlur={formik.handleBlur}
          />
          {formik.touched.dtNascUsuario && formik.errors.dtNascUsuario ? (
            <ErrorMessage>{formik.errors.dtNascUsuario}</ErrorMessage>
          ) : null}
          <Input
            icon={MdLock}
            name="cpfUsuario"
            type="type"
            placeholder="CPF - e.g: 12345678901"
            onBlur={formik.handleBlur}
          />
          {formik.touched.cpfUsuario && formik.errors.cpfUsuario ? (
            <ErrorMessage>{formik.errors.cpfUsuario}</ErrorMessage>
          ) : null}
          <Input
            icon={MdPhone}
            name="telefoneUsuario"
            type="type"
            placeholder="Telefone - e.g: 21123456789"
            onBlur={formik.handleBlur}
          />
          {formik.touched.telefoneUsuario && formik.errors.telefoneUsuario ? (
            <ErrorMessage>{formik.errors.telefoneUsuario}</ErrorMessage>
          ) : null}
          <Button disabled={!formik.isValid} type="submit">
            Enviar
          </Button>
        </FormPlatform>
      </FormikProvider>
    </Container>
  );
};

export default UserForm;
