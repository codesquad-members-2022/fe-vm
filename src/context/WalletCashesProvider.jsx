import React, { useState } from 'react';

import cashData from 'mocks/cashData';
import { getTotalCash } from 'util/util';

export const WalletCashesContext = React.createContext();

export const WalletCashesProvider = props => {
  console.log('render CashProvider');
  const [initialCashes, initialCashBalance] = [cashData, getTotalCash(cashData)];

  const [cashes, setCashes] = useState(initialCashes);
  const [totalCash, setTotalCash] = useState(initialCashBalance);

  return (
    <WalletCashesContext.Provider value={{ cashes, setCashes, totalCash, setTotalCash }}>
      {props.children}
    </WalletCashesContext.Provider>
  );
};
