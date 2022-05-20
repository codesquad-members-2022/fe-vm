import React, { useMemo, useState } from 'react';

import cashData from 'mocks/cashData';
import { getTotalCash } from 'util/util';

export const WalletCashesContext = React.createContext();

export const WalletCashesProvider = props => {
  const getTotalInputCash = () => (inputCashes.length ? inputCashes.reduce((a, c) => a + c) : 0);

  const [initialCashes, initialCashBalance] = [cashData, getTotalCash(cashData)];

  const [cashes, setCashes] = useState(initialCashes);
  const [totalCash, setTotalCash] = useState(initialCashBalance);
  const [inputCashes, setInputCashes] = useState([]);
  const [totalInputCash, setTotalInputCash] = useState(0);

  const value = {
    cashes,
    setCashes,
    totalCash,
    setTotalCash,
    inputCashes,
    setInputCashes,
    totalInputCash,
    setTotalInputCash,
    getTotalInputCash,
  };

  return (
    <WalletCashesContext.Provider value={value}>{props.children}</WalletCashesContext.Provider>
  );
};
