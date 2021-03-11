import * as Yup from 'yup';

const schema = Yup.object().shape({
  nomeUsuario: Yup.string().required('Nome do usuário precisa ser preenchido'),
  emailUsuario: Yup.string().required('Campo de Email precisa ser preenchido'),
  dtNascUsuario: Yup.string()
    .matches(
      /(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d{2}/,
      'Não é o formato aceitado'
    )
    .required('Data de nascimento não válida'),
  cpfUsuario: Yup.string()
    .required('Campo de CPF precisa ser preenchido')
    .max(11, 'CPF precisa ter no máximo 11 números'),
  telefoneUsuario: Yup.string()
    .max(9, 'Telefone precisa ter no máximo 9 números')
    .required('Campo de Telefone precisa ser preenchido'),
});

export default schema;

// /(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)\d{2}/
