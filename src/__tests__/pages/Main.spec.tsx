import { render } from '@testing-library/react';
import React from 'react';
import Main from '../../pages/Main';

describe('Main Page', () => {
  it('banana', () => {
    const result = render(<Main />);
  });
});
