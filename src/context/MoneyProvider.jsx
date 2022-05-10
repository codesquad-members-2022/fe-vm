import React, { useState } from 'react';

import moneyData from 'mocks/moneyData';

const initMoneyData = moneyData;

export const MoneyContext = React.createContext();

export const MoneyProvider = (props) => {
  const [inputMoney, setInputMoney] = useState(0);
  const [walletMoney, setWalletMoney] = useState(initMoneyData);
  const [possibleMoney, setPossibleMoney] = useState([]);
  const moneyInfo = {
    walletMoney,
    setWalletMoney,
    inputMoney,
    setInputMoney,
    possibleMoney,
    setPossibleMoney,
  };
  return (
    <MoneyContext.Provider value={moneyInfo}>
      {props.children}
    </MoneyContext.Provider>
  );
};
