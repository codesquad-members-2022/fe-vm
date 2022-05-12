import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "styles";
import reset from "styled-reset";
import { DisplayProvider } from "context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, VendingMachine, Wallet, NotFound } from "pages";

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
}

body{
  width:100%;
  margin: 0 auto;
  font-family: sans-serif;
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
    <DisplayProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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
    </DisplayProvider>
  );
}

export default App;
