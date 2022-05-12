import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'style/default';
import GlobalStyle from 'style/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
