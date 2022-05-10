import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import VendingMachine from "./components/vendingMachine/Machine";
import Wallet from "./components/wallet/Wallet";
import { HeaderBtns, HeaderWrap } from "./components/Header";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <nav>
          <HeaderWrap>
            <Link to="/vm" style={{ textDecoration: "none" }}>
              <HeaderBtns info={"자판기"} />
            </Link>

            <Link to="/wallet" style={{ textDecoration: "none" }}>
              <HeaderBtns info={"지갑"} />
            </Link>
          </HeaderWrap>
        </nav>

        <Routes>
          <Route path="/vm" element={<VendingMachine />} />
          <Route path="/wallet" element={<Wallet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
