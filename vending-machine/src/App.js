import { GlobalStyle } from './common/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SwitchBox } from './components/switchBox/switchBox';
import { VendingMachine } from './components/vendingMachine/vendingMachine';
import { Wallet } from './components/wallet/wallet';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <SwitchBox />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="my_wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
