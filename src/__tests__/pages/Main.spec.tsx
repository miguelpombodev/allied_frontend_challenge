import { render } from '@testing-library/react';
import React from 'react';
import Main from '../../pages/Main';

describe('Main Page', () => {
  it('should be able to acess the Main page', () => {
    const { debug } = render(<Main />);

    debug();
  });

  // it('should be able to choose a radio button', () => {});
});
