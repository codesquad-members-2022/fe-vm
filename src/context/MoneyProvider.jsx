import React, { useState } from 'react';

export const MoneyContext = React.createContext();

export const MoneyProvider = (props) => {
  const [inputMoney, setInputMoney] = useState(0);
  const [possibleMoney, setPossibleMoney] = useState([]);
  const moneyInfo = {
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
