import AmountContext from './AmountContext';
import React, { useEffect, useReducer } from 'react';
import { INITAIL_MONEY } from '../constant/constant';
import { moneyReducer, logReducer } from './reducer';

const AmountProvider = (props) => {
  const [money, dispatchMoney] = useReducer(moneyReducer, INITAIL_MONEY);
  const [log, dispatchLog] = useReducer(logReducer, []);

  useEffect(() => {
    if (!money.TOTAL_AMOUNT) return;
    const dispatchTimer = setTimeout(() => {
      dispatchMoney({ type: 'WITHDRAW' });
      dispatchLog({ type: 'WITHDRAW', payload: money.TOTAL_AMOUNT });
    }, 4000);

    return () => {
      clearTimeout(dispatchTimer);
    };
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
