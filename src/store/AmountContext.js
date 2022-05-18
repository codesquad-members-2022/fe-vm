import React from 'react';

const AmountContext = React.createContext({
  money: {},
  log: {},
  dispatchLog: () => {},
  dispatchMoney: () => {},
});

export default AmountContext;
