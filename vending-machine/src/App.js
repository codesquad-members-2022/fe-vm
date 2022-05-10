import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import VendingMachine from "./components/VendingMachine";
import Wallet from "./components/Wallet";
import GlobalStyles from "./style/Globalstyles";
import theme from "./style/theme";
import styled from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <AppWrap>
        <Nav></Nav>
        <VendingMachine></VendingMachine>
        <Wallet></Wallet>
      </AppWrap>
    </ThemeProvider>
  );
}
const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default App;
