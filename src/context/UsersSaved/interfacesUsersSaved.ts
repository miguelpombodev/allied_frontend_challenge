import { Values } from '../../pages/UserForm/interfacesUserForm';

export interface UsersSavedContextData {
  usersSaved: UserSaved[];
  addUsersSaved(userData: Values, sku: string, planName: string): void;
}

export interface UserSaved {
  userData: Values;
  sku: string;
  planName: string;
}
