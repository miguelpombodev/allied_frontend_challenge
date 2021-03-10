import * as Yup from 'yup';

const schema = Yup.object().shape({
  nomeUsuario: Yup.string().required('Nome do usuário precisa ser preenchido'),
  emailUsuario: Yup.string().required('Campo de Email precisa ser preenchido'),
  dtNascUsuario: Yup.string().required('Data de nascimento não válida'),
  cpfUsuario: Yup.string()
    .required('Campo de CPF precisa ser preenchido')
    .max(11),
  telefoneUsuario: Yup.string().required(
    'Campo de Telefone precisa ser preenchido'
  ),
});

export default schema;
