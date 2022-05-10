import Header from './components/layout/Header/Header';
import Nav from './components/layout/Nav/Nav';
import theme from './style/theme.js';
import GlobalStyle from './style/GlobalStyle';
import styled, { css, ThemeProvider } from 'styled-components';
import Container from './style/container';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContainer width="70vw" height="100vh">
          <Header />
          <Nav />
          <MainContainer width="95%" height="75%">
            <div>12312312312312312</div>
          </MainContainer>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

const MainContainer = styled(Container)`
  background: blue;
  margin: 0 auto;
  display: flex;
`;

const AppContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.grey};
  margin: 0 auto;
`;

export default App;
