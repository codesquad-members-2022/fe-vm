import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import VendingMachine from "./components/VendingMachine";
import Wallet from "./components/Wallet";
import GlobalStyles, { WidthSort } from "./style/Globalstyles";
import theme from "./style/theme";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WalletProvider from "./contexts/walletContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <AppWrap>
          <Nav></Nav>
          <WalletProvider>
            <Routes>
              <Route
                path="/"
                element={<VendingMachine></VendingMachine>}
              ></Route>
              <Route path="/wallet" element={<Wallet></Wallet>}></Route>
            </Routes>
          </WalletProvider>
        </AppWrap>
      </BrowserRouter>
    </ThemeProvider>
  );
}
const AppWrap = styled.div`
  ${WidthSort}
  flex-direction: column;
`;
export default App;
