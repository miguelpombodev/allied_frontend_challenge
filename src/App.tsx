import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
