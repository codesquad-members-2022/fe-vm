import Header from './components/layout/Header/Header';
import Nav from './components/layout/Nav/Nav';
import theme from './style/theme.js';
import GlobalStyle from './style/GlobalStyle';
import styled, { css, ThemeProvider } from 'styled-components';
import AmountProvider from './store/AmountProvider';
import Container from './components/UI/container';
import Vending from './components/layout/Vending/Vending';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AmountProvider>
          <AppContainer width="70vw" height="100vh">
            <Header />
            <Nav />
            <main>
              <Vending />
            </main>
            {/* <MainContainer width="95%" height="75%">
            <div>12312312312312312</div>
          </MainContainer> */}
          </AppContainer>
        </AmountProvider>
      </ThemeProvider>
    </>
  );
}

const AppContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.grey};
  margin: 0 auto;
`;

export default App;
