import React, { createContext, useState } from 'react';

import cashData from '@/mocks/cash';

const CashContext = createContext();

const CashProvider = ({ children }) => {
  const [cash, setCash] = useState(cashData);
  const [balance, setBalance] = useState(0);

  return (
    <CashContext.Provider value={{ cash, setCash, balance, setBalance }}>
      {children}
    </CashContext.Provider>
  );
};

export { CashContext, CashProvider };
