import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import VendingMachine from "./components/vendingMachine/Machine";
import Wallet from "./components/wallet/Wallet";
import { HeaderWrap } from "./components/header/VendingMachineBtn";
import GlobalStyles from "./globalStyles";
import VendingMachineBtn from "./components/header/VendingMachineBtn";
import WalletBtn from "./components/header/WalletBtn";
import HeaderInfoContext from "./context/HeaderInfoContext";
import VmWalletContext from "./context/VmWalletContext";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <HeaderInfoContext>
          <nav>
            <HeaderWrap>
              <Link to="/vm" style={{ textDecoration: "none" }}>
                <VendingMachineBtn />
              </Link>

              <Link to="/wallet" style={{ textDecoration: "none" }}>
                <WalletBtn />
              </Link>
            </HeaderWrap>
          </nav>
        </HeaderInfoContext>
        <VmWalletContext>
          <Routes>
            <Route path="/vm" element={<VendingMachine />} />
            <Route path="/wallet" element={<Wallet />}></Route>
          </Routes>
        </VmWalletContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
