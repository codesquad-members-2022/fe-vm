import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import VendorMachine from "./routes/VendingMachine";
import Wallet from "./routes/Wallet";
import "./App.css";
import { useState } from "react";
import { InputContext } from "./context/InputContext";
import { MessageContext } from "./context/MessageContext";
import { MoneyContext } from "./context/MoneyContext";

function App() {
  const [inputPrice, setInputPrice] = useState("");
  const [message, setMessage] = useState([]);
  const [accumulatedPrice, setAccumulatedPrice] = useState(0);
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
      <MoneyContext.Provider value={{ accumulatedPrice, setAccumulatedPrice }}>
        <MessageContext.Provider value={{ message, setMessage }}>
          <InputContext.Provider value={{ inputPrice, setInputPrice }}>
            <Routes>
              <Route path="/" element={<VendorMachine />} />
              <Route path="/wallet" element={<Wallet />} />
            </Routes>
          </InputContext.Provider>
        </MessageContext.Provider>
      </MoneyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
