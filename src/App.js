import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import VendingMachine from "./routes/VendingMachine";
import Wallet from "./routes/Wallet";
import Nav from "./components/Nav";
import { WalletProvider } from "./contexts/WalletContext";

export default function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <WalletProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<VendingMachine />}></Route>
            <Route path="/wallet" element={<Wallet />}></Route>
          </Routes>
        </WalletProvider>
      </BrowserRouter>
    </div>
  );
}
