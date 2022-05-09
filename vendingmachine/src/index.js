import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import GlobalStyles from './styled-components/global';
import { ThemeProvider } from 'styled-components';
import theme from './styled-components/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
