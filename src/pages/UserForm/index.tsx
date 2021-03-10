import React, { useCallback, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, FormPlatform, ErrorMessage } from './styles';

import { UserData, Values, UserChooseData } from './interfacesUserForm';

const schema = Yup.object().shape({
  nomeUsuario: Yup.string().required(),
  emailUsuario: Yup.string().required(),
  dtNascUsuario: Yup.string().required(),
  cpfUsuario: Yup.string().required().max(11),
  telefoneUsuario: Yup.string().required(),
});

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>();
  const { state } = useLocation<UserChooseData>();

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
            name="nomeUsuario"
            type="type"
            placeholder="Nome"
            onBlur={formik.handleBlur}
          />
          {formik.touched.nomeUsuario && formik.errors.nomeUsuario ? (
            <ErrorMessage>{formik.errors.nomeUsuario}</ErrorMessage>
          ) : null}
          <Input
            name="emailUsuario"
            type="type"
            placeholder="Email"
            onBlur={formik.handleBlur}
          />
          {formik.touched.emailUsuario && formik.errors.emailUsuario ? (
            <ErrorMessage>{formik.errors.emailUsuario}</ErrorMessage>
          ) : null}
          <Input
            name="dtNascUsuario"
            type="type"
            placeholder="Data de Nascimento"
            onBlur={formik.handleBlur}
          />
          {formik.touched.dtNascUsuario && formik.errors.dtNascUsuario ? (
            <ErrorMessage>{formik.errors.dtNascUsuario}</ErrorMessage>
          ) : null}
          <Input
            name="cpfUsuario"
            type="type"
            placeholder="CPF"
            onBlur={formik.handleBlur}
          />
          {formik.touched.cpfUsuario && formik.errors.cpfUsuario ? (
            <ErrorMessage>{formik.errors.cpfUsuario}</ErrorMessage>
          ) : null}
          <Input
            name="telefoneUsuario"
            type="type"
            placeholder="Telefone"
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
