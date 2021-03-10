import { UserChoose } from '../FormPlatformPlans/interfacesFormPlatformPlans';

export type UserChooseData = UserChoose;

export interface UserData extends UserChoose {
  values: {
    nomeUsuario: string;
    emailUsuario: string;
    cpfUsuario: string;
    dtNascUsuario: string;
    telefoneUsuario: string;
  };
}

export interface Values {
  nomeUsuario: string;
  emailUsuario: string;
  cpfUsuario: string;
  dtNascUsuario: string;
  telefoneUsuario: string;
}
