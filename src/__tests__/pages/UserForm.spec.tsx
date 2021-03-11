import React from 'react';
import { render } from '@testing-library/react';
import UserForm from '../../pages/UserForm';

jest.mock('react-router-dom', () => {
  return {
    useLocation: jest.fn().mockReturnValue({
      pathname: '/UserForm/[object Object]',
      state: {
        sku: 'CI00002NA_NOVA_LINHA',
        franquia: '2GB',
        valor: '59,90',
        aparelho: {
          nome: 'Modem',
          valor: '99,00',
          numeroParcelas: 1,
          valorParcela: false,
        },
        ativo: true,
        planName: 'CPT02',
      },
      search: '',
      hash: '',
      key: 't9lsqz',
    }),
  };
});

describe('UserForm', () => {
  it('should be able to acess UserForm', () => {
    const { debug } = render(<UserForm />);

    debug();
  });
});
