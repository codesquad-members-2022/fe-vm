import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';
import Layout from 'components/Layout';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<VendingMachine />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
