import { useState } from "react";

import VmWalletContextStore from "../stores/VmWalletStore";

const VmWalletContext = (props) => {
  const [currMoney, setCurrMoney] = useState(0);
  const [isInsertCoin, setIsInsertCoin] = useState(false);
  const VmWalletInfo = {
    currMoney,
    setCurrMoney,
    isInsertCoin,
    setIsInsertCoin,
  };

  return <VmWalletContextStore.Provider value={VmWalletInfo}>{props.children}</VmWalletContextStore.Provider>;
};

export default VmWalletContext;
