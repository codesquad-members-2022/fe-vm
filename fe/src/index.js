import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import theme from 'style/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/globalStyle';
import VMcontext from 'context/VMcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <VMcontext>
        <App />
      </VMcontext>
    </ThemeProvider>
  </React.StrictMode>,
);
