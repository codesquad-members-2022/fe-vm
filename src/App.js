import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components";
import { VendingMachineContainer, Wallet, NotFound } from "pages";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  font-family: 'Noto Sans KR';
  font-style: normal;
  button{
      background-color: transparent;
      border: none;
  }
  button:hover{
      cursor:pointer;
  }  
`;

export const MoneyContext = React.createContext();
export const LogContext = React.createContext();

function App() {
  const [inputMoney, setInputMoney] = useState(0);
  const [logs, setLogs] = useState([{ idx: 1, type: "init", data: "~ this is vending machine ~" }]);

  return (
    <LogContext.Provider value={{ logs, setLogs }}>
      <MoneyContext.Provider value={{ inputMoney, setInputMoney }}>
        <GlobalStyles />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<VendingMachineContainer />} />
            <Route path="/vendingmachine" element={<VendingMachineContainer />} />
            <Route path="/wallet" element={<Wallet />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MoneyContext.Provider>
    </LogContext.Provider>
  );
}

export default App;
