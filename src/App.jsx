import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/constants/theme';
import GlobalStyle from '@/GlobalStyle';
import Router from '@/Router';

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
