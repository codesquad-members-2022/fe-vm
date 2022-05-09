import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';
import VendingMachine from 'Pages/VendingMachine';
import Wallet from 'Pages/Wallet';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
