import { createContext, useMemo, useState } from "react";

import moneyHelper from "helper/moneyHelper";
import cash from "mockData/money";
import constants from "utils/constants";

const { INCREASE_COUNT, DECREASE_COUNT, MONEY_ARR_DESC_ORDER, INITIAL_COUNT } =
  constants;
const { computeTotalMoney } = moneyHelper;

export const MoneyContext = createContext(() => {});
export const MoneyActionsContext = createContext({});
export const InsertedMoneyContext = createContext(() => {});

const MoneyProvider = ({ children }) => {
  const [cashData, setCashData] = useState(cash);
  const [insertedMoney, setInsertedMoney] = useState([]);

  const decreaseCashCount = (money, decreaseCount = DECREASE_COUNT) => {
    setCashData((prevCashData) =>
      prevCashData.map((current) => {
        if (current.money === money) {
          return { ...current, count: current.count - decreaseCount };
        }
        return current;
      })
    );
  };

  const insertMoney = (currentMoney) => {
    setInsertedMoney((prevInsertedMoney) => [
      ...prevInsertedMoney,
      { money: currentMoney, count: DECREASE_COUNT },
    ]);

    decreaseCashCount(currentMoney);
  };

  const insertTotalMoney = (currentCashData) => {
    const restCashDatas = currentCashData.reduce((prev, { money, count }) => {
      decreaseCashCount(money, count);
      return [...prev, { money, count }];
    }, []);

    setInsertedMoney((prevInsertedMoney) => [
      ...prevInsertedMoney,
      ...restCashDatas,
    ]);
  };

  const resetInsertedMoney = (moneyCount) => {
    setCashData((prevCashData) =>
      prevCashData.map((currentData) =>
        moneyCount
          .filter(({ money }) => money === currentData.money)
          .reduce(
            (prev, { count }) => ({ ...prev, count: prev.count + count }),
            currentData
          )
      )
    );
    setInsertedMoney([]);
  };

  const spendInsertedMoney = (productPrice) => {
    setInsertedMoney((prevInsertedMoney) => {
      const totalMoney = computeTotalMoney(prevInsertedMoney);
      let restInsertedMoney = totalMoney - productPrice;

      const newInsertedMoney = MONEY_ARR_DESC_ORDER.map((currentMoney) => {
        let moneyCount = INITIAL_COUNT;

        if (!restInsertedMoney || restInsertedMoney < currentMoney) {
          return { money: currentMoney, count: moneyCount };
        }

        if (!(restInsertedMoney % currentMoney)) {
          while (restInsertedMoney) {
            moneyCount += INCREASE_COUNT;
            restInsertedMoney -= currentMoney;
          }
          return { money: currentMoney, count: moneyCount };
        }

        while (restInsertedMoney >= currentMoney) {
          moneyCount += INCREASE_COUNT;
          restInsertedMoney -= currentMoney;
        }
        return { money: currentMoney, count: moneyCount };
      });

      return newInsertedMoney;
    });
  };

  const moneyData = useMemo(
    () => ({
      cashData,
    }),
    [cashData]
  );

  const moneyActions = useMemo(
    () => ({
      insertMoney,
      insertTotalMoney,
      resetInsertedMoney,
      spendInsertedMoney,
      decreaseCashCount,
    }),
    []
  );

  const totalInsertedMoney = useMemo(
    () => ({ insertedMoney }),
    [insertedMoney]
  );

  return (
    <MoneyActionsContext.Provider value={moneyActions}>
      <InsertedMoneyContext.Provider value={totalInsertedMoney}>
        <MoneyContext.Provider value={moneyData}>
          {children}
        </MoneyContext.Provider>
      </InsertedMoneyContext.Provider>
    </MoneyActionsContext.Provider>
  );
};

export default MoneyProvider;
