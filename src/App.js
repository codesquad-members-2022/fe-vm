import { MoneyProvider } from 'context/MoneyContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';
import Router from 'Router';

function App() {
  return (
    <MoneyProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </MoneyProvider>
  );
}

export default App;
