import Header from './components/layout/Header/Header';
import Nav from './components/layout/Nav/Nav';
import theme from './style/theme.js';
import GlobalStyle from './style/GlobalStyle';
import styled, { css, ThemeProvider } from 'styled-components';
import AmountProvider from './store/AmountProvider';
import Container from './components/UI/container';
import Vending from './components/layout/Vending/Vending';
import Wallet from './components/layout/Wallet/Wallet';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AmountProvider>
          <AppContainer width="860px" height="100vh">
            <Header />
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route path="/" element={<Vending />} />
                <Route path="/wallet" element={<Wallet />} />
              </Routes>
            </BrowserRouter>
          </AppContainer>
        </AmountProvider>
      </ThemeProvider>
    </>
  );
}

//  //{' '}
//  <main>
//  // <Vending />
//  // {/* <Wallet /> */}
//  //{' '}
// </main>
const AppContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.grey};
  margin: 0 auto;
`;

export default App;
