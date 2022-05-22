import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/GlobalStyle';
import Router from '@/Router';
import theme from '@/styles/theme';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
