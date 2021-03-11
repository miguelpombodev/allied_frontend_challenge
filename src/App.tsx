import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import { UsersSavedProvider } from './context/UsersSaved';

import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <UsersSavedProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UsersSavedProvider>
    </>
  );
};

export default App;
