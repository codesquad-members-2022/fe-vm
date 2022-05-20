import { GlobalStyle } from './common/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { VendingMachine } from './components/vendingMachine/vendingMachine';
import { Wallet } from './components/wallet/wallet';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<VendingMachine />} />
            <Route path="/vendingMachine" element={<VendingMachine />} />
            <Route path="/myWallet" element={<Wallet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
