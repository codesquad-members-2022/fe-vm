import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./components/vendingMachine/Machine";
import Wallet from "./components/wallet/Wallet";
import GlobalStyles from "./globalStyles";
import HeaderInfoContext from "./context/HeaderInfoContext";
import VmWalletContext from "./context/VmWalletContext";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <HeaderInfoContext>
          <Header />
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
