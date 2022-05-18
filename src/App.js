import { MoneyProvider } from 'context/MoneyContext';
import { ThemeProvider } from 'styled-components';
import { LogProvider } from 'context/LogContext';
import { ProductsProvider } from 'context/ProductContext';

import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';
import Router from 'Router';

function App() {
  return (
    <LogProvider>
      <MoneyProvider>
        <ProductsProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </ProductsProvider>
      </MoneyProvider>
    </LogProvider>
  );
}

export default App;
