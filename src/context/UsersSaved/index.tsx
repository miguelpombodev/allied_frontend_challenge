import React, { createContext, useCallback, useState } from 'react';
import { Values } from '../../pages/UserForm/interfacesUserForm';

import { UserSaved, UsersSavedContextData } from './interfacesUsersSaved';

export const UsersSavedContext = createContext<UsersSavedContextData>(
  {} as UsersSavedContextData
);

export const UsersSavedProvider: React.FC = ({ children }) => {
  const [usersSaved, setUsersSaved] = useState<UserSaved[]>(() => {
    const localStorageUsers = localStorage.getItem('UsersSaved');

    if (localStorageUsers) {
      return JSON.parse(localStorageUsers);
    }

    return [];
  });

  const addUsersSaved = useCallback(
    (userData: Values, sku: string, planName: string) => {
      const user = { userData, sku, planName };

      setUsersSaved([...usersSaved, user]);

      localStorage.setItem('UsersSaved', JSON.stringify(usersSaved));
    },
    [usersSaved]
  );

  return (
    <UsersSavedContext.Provider value={{ usersSaved, addUsersSaved }}>
      {children}
    </UsersSavedContext.Provider>
  );
};
