import AmountContext from './AmountContext';
import React, { useCallback, useEffect, useState } from 'react';
import { INITIAL_WALLET, INITAIL_INSERT } from '../constant/constant';

const AmountProvider = (props) => {
  const [wallet, setWallet] = useState(INITIAL_WALLET);
  const [insertedMoney, setInsertedMoney] = useState(INITAIL_INSERT);
  const [totalAmount, setTotalAmount] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setTotalAmount(getTotalBalance(insertedMoney));
  }, [totalAmount, insertedMoney]);

  const getTotalBalance = useCallback((walletObj) => {
    const walletArray = Object.entries(walletObj);
    const totalBalance = walletArray.reduce(
      (acc, cur) => acc + Number(cur[0]) * Number(cur[1]),
      0
    );
    return totalBalance;
  }, []);

  const amountContext = {
    totalAmount,
    wallet,
    insertedMoney,
    logs,
    setTotalAmount,
    setWallet,
    setInsertedMoney,
    setLogs,
  };

  return (
    <AmountContext.Provider value={amountContext}>
      {props.children}
    </AmountContext.Provider>
  );
};

export default AmountProvider;
