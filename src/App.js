import { MoneyProvider } from 'context/MoneyContext';
import { ThemeProvider } from 'styled-components';
import { LogProvider } from 'context/LogContext';
import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';
import Router from 'Router';

function App() {
  return (
    <LogProvider>
      <MoneyProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </MoneyProvider>
    </LogProvider>
  );
}

export default App;
