import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';
import Navigation from 'components/Navigation';
import VendingMachine from 'Pages/VendingMachine';
import Wallet from 'Pages/Wallet';
import NotFound from 'Pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
