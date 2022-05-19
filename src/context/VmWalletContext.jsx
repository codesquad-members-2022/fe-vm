import { useState } from "react";

import VmWalletContextStore from "../stores/VmWalletStore";
import Money from "../mock/money";

const VmWalletContext = ({ children }) => {
  const [currMoney, setCurrMoney] = useState(0);
  const [isInsertCoin, setIsInsertCoin] = useState(false);
  const [logMessage, setLogMessage] = useState([]);
  const [moneyInfo, setMoneyInfo] = useState(Money);

  const VmWalletInfo = {
    currMoney,
    setCurrMoney,
    isInsertCoin,
    setIsInsertCoin,
    logMessage,
    setLogMessage,
    moneyInfo,
    setMoneyInfo,
  };

  return (
    <VmWalletContextStore.Provider value={VmWalletInfo}>{children}</VmWalletContextStore.Provider>
  );
};

export default VmWalletContext;
