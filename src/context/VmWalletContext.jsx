import { useState } from "react";

import VmWalletContextStore from "../stores/VmWalletStore";
import Money from "../mock/money";

const VmWalletContext = (props) => {
  const [currMoney, setCurrMoney] = useState(0);
  const [isInsertCoin, setIsInsertCoin] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isInitState, setIsInitState] = useState(false);
  const [moneyAmounts, setMoneyAmounts] = useState(0);
  const [logMessage, setLogMessage] = useState([]);
  const [moneyInfo, setMoneyInfo] = useState(Money);

  const VmWalletInfo = {
    currMoney,
    setCurrMoney,
    isInsertCoin,
    setIsInsertCoin,
    totalAmount,
    setTotalAmount,
    isInitState,
    setIsInitState,
    moneyAmounts,
    setMoneyAmounts,
    logMessage,
    setLogMessage,
    moneyInfo,
    setMoneyInfo,
  };

  return (
    <VmWalletContextStore.Provider value={VmWalletInfo}>
      {props.children}
    </VmWalletContextStore.Provider>
  );
};

export default VmWalletContext;
