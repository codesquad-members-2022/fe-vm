import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import VendingMachine from "./components/VendingMachine";
import Wallet from "./components/Wallet";
import GlobalStyles from "./style/Globalstyles";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Nav></Nav>
      <VendingMachine></VendingMachine>
      <Wallet></Wallet>
    </ThemeProvider>
  );
}

export default App;
