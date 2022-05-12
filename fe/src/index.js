import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import theme from 'style/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/globalStyle';
import VMContext from 'context/VMContext';
import worker from 'mocks/brower';

if (process.env.REACT_APP_MSW) {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <VMContext>
        <App />
      </VMContext>
    </ThemeProvider>
  </React.StrictMode>,
);
