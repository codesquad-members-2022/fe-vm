import React, { useMemo, useState } from 'react';

import cashData from 'mocks/cashData';

const getTotalCash = cashData =>
  cashData.reduce((total, cash) => total + cash.unit * cash.count, 0);

export const CashContext = React.createContext();

export const CashProvider = props => {
  const [cash, setCash] = useState(cashData);
  const [totalCash, setTotalCash] = useState(getTotalCash(cash));

  return (
    <CashContext.Provider value={{ cash, setCash, totalCash, setTotalCash }}>
      {props.children}
    </CashContext.Provider>
  );
};
