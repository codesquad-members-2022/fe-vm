import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import VendorMachine from "./routes/VendorMachine";
import Wallet from "./routes/Wallet";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          자판기
        </NavLink>
        <NavLink
          to="/wallet"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          지갑
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<VendorMachine />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
