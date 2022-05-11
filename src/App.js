import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import GlobbalFonts from "./styles/fonts/fonts";
import VendingMachine from "./routes/VendingMachine";
import Wallet from "./routes/Wallet";
import Nav from "./components/Nav";
import { WalletProvider } from "./contexts/WalletContext";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyles />
        <GlobbalFonts />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <WalletProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<VendingMachine />}></Route>
              <Route path="/wallet" element={<Wallet />}></Route>
            </Routes>
          </WalletProvider>
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray4};
  display: flex;
  flex-direction: column;
`;
