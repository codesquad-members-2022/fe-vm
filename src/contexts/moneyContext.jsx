import { createContext, useCallback, useMemo, useState } from "react";

import cash from "mockData/money";

const INITIAL_MONEY = 0;
const DECREASE_COUNT = 1;

export const MoneyContext = createContext({});
export const SetMoneyContext = createContext(() => {});

export const InsertedMoneyContext = createContext(-1);
export const SetInsertedMoneyContext = createContext(() => {});

const MoneyProvider = ({ children }) => {
  const [cashData, setCashData] = useState(cash);
  const [insertedMoney, setInsertedMoney] = useState(INITIAL_MONEY);

  const decreaseCashCount = useCallback((money) => {
    setCashData((prevCashData) => {
      return prevCashData.map((current) => {
        if (current.money === money) {
          return { ...current, count: current.count - DECREASE_COUNT };
        }
        return current;
      });
    });
  }, []);

  const money = useMemo(
    () => ({
      cashData,
    }),
    [cashData]
  );

  const insertMoney = useCallback((currentMoney) => {
    return setInsertedMoney(
      (prevInsertedMoney) => prevInsertedMoney + currentMoney
    );
  }, []);

  const totalInsertedMoney = useMemo(
    () => ({ insertedMoney }),
    [insertedMoney]
  );

  return (
    <SetMoneyContext.Provider value={decreaseCashCount}>
      <SetInsertedMoneyContext.Provider value={insertMoney}>
        <MoneyContext.Provider value={money}>
          <InsertedMoneyContext.Provider value={totalInsertedMoney}>
            {children}
          </InsertedMoneyContext.Provider>
        </MoneyContext.Provider>
      </SetInsertedMoneyContext.Provider>
    </SetMoneyContext.Provider>
  );
};

export default MoneyProvider;
