import { createContext, useState } from 'react';

import { changeNumToLocalMoney, replaceNotNumToSpace } from '../Utils/utils';

export const PayMoneyContext = createContext(null);
export const PayTotalContext = createContext(null);

export function PayProvider({ children }) {
  const [payMoney, setPayMoney] = useState(0);
  const [payTotal, setPayTotal] = useState(0);
  const convertPayTotal = changeNumToLocalMoney(payTotal);
  const convertPayMoney = (money = payMoney) => {
    return changeNumToLocalMoney(replaceNotNumToSpace(money));
  };

  return (
    <PayMoneyContext.Provider
      value={{ payMoney, setPayMoney, convertPayMoney }}
    >
      <PayTotalContext.Provider
        value={{ payTotal, setPayTotal, convertPayTotal }}
      >
        {children}
      </PayTotalContext.Provider>
    </PayMoneyContext.Provider>
  );
}
