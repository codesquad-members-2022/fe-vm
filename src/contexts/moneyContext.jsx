import { createContext, useCallback, useMemo, useState } from "react";

import cash from "mockData/money";
import constants from "utils/constants";

const { DECREASE_COUNT } = constants;

// 지갑 금액 Context
export const MoneyContext = createContext({});
export const SetMoneyContext = createContext(() => {});

// 자판기 금액 Context
export const InsertedMoneyContext = createContext({});
export const SetInsertedMoneyContext = createContext(() => {});
export const ResetInsertedMoneyContext = createContext(() => {});

const MoneyProvider = ({ children }) => {
  const [cashData, setCashData] = useState(cash);
  const [insertedMoney, setInsertedMoney] = useState([]);

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

  const moneyData = useMemo(
    () => ({
      cashData,
    }),
    [cashData]
  );

  const insertMoney = useCallback((currentMoney) => {
    return setInsertedMoney((prevInsertedMoney) => [
      ...prevInsertedMoney,
      { money: currentMoney, count: DECREASE_COUNT },
    ]);
  }, []);

  const resetInsertedMoney = useCallback((moneyCount) => {
    // 아무것도 구매하지 않고 반환버튼을 누른경우 그대로 돌려주는 함수
    setCashData((prevCashData) => {
      return prevCashData.map((currentData) => {
        return moneyCount
          .filter(({ money }) => money === currentData.money)
          .reduce((prev, { count }) => {
            return { ...prev, count: prev.count + count };
          }, currentData);
      });
    });

    setInsertedMoney([]);
  }, []);

  const totalInsertedMoney = useMemo(
    () => ({ insertedMoney }),
    [insertedMoney]
  );

  return (
    <SetMoneyContext.Provider value={decreaseCashCount}>
      <SetInsertedMoneyContext.Provider value={insertMoney}>
        <ResetInsertedMoneyContext.Provider value={resetInsertedMoney}>
          <MoneyContext.Provider value={moneyData}>
            <InsertedMoneyContext.Provider value={totalInsertedMoney}>
              {children}
            </InsertedMoneyContext.Provider>
          </MoneyContext.Provider>
        </ResetInsertedMoneyContext.Provider>
      </SetInsertedMoneyContext.Provider>
    </SetMoneyContext.Provider>
  );
};

export default MoneyProvider;
