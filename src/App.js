import styled, { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, VendingMachine, Wallet, NotFound } from "pages";
import { theme } from "styles";

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 100vh;
`;

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
}

div {
  border-radius: 10px;
}

a:hover {
  cursor: pointer;
  font-size: 1.2em;
}

`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<VendingMachine />} />
              <Route path="/vendingmachine" element={<VendingMachine />} />
              <Route path="/wallet/*" element={<Wallet />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
