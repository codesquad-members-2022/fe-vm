import AmountContext from './AmountContext';
import React, { useEffect, useState } from 'react';

const AmountProvider = (props) => {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(10000);
  const addItem = (item) => {
    setAmount(Number(item));
    setBalance((prev) => prev - amount);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setBalance((prev) => prev + amount);
  //       setAmount(0);
  //       console.log(balance);
  //     }, 10000);

  //     return () => {};
  //   }, [amount, balance]);
  // 자동반환

  const amountContext = {
    totalAmount: amount,
    balance: balance,
    add: addItem,
    remove: (id) => {},
  };

  return (
    <AmountContext.Provider value={amountContext}>
      {props.children}
    </AmountContext.Provider>
  );
};

export default AmountProvider;
