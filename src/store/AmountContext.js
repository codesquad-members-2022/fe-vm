import React from 'react';

const AmountContext = React.createContext({
  totalAmount: 0,
  balance: 0,
  add: (item) => {},
  remove: (id) => {},
  insertedMoney: {},
});

export default AmountContext;
