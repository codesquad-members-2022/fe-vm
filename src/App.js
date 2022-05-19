import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import GlobbalFonts from "./styles/fonts/fonts";
import theme from "./styles/theme";

import VendingMachine from "./routes/VendingMachine";
import Wallet from "./routes/Wallet";

import Nav from "./components/Nav";

import { WalletProvider } from "./contexts/WalletContext";
import { InputAmountProvider } from "./contexts/InputAmount";
import { LogProvider } from "./contexts/Log";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LogProvider>
        <InputAmountProvider>
          <WalletProvider>
            <AppWrapper>
              <GlobalStyles />
              <GlobbalFonts />
              <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Nav />
                <Routes>
                  <Route path="/" element={<VendingMachine />}></Route>
                  <Route path="/wallet" element={<Wallet />}></Route>
                </Routes>
              </BrowserRouter>
            </AppWrapper>
          </WalletProvider>
        </InputAmountProvider>
      </LogProvider>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray4};
  display: flex;
  flex-direction: column;
`;
