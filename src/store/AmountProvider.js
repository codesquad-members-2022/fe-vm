import AmountContext from './AmountContext';
import React, { useEffect, useReducer } from 'react';
import { INITAIL_MONEY } from '../constant/constant';
import { moneyReducer, logReducer } from './reducer';

const AmountProvider = (props) => {
  const [money, dispatchMoney] = useReducer(moneyReducer, INITAIL_MONEY);
  const [log, dispatchLog] = useReducer(logReducer, []);
  useEffect(() => {
    console.log(money, 'effect');
    console.log(log);
  }, [money, log]);

  const amountContext = {
    money,
    log,
    dispatchLog,
    dispatchMoney,
  };

  return (
    <AmountContext.Provider value={amountContext}>
      {props.children}
    </AmountContext.Provider>
  );
};

export default AmountProvider;
