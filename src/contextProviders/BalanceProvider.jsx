import { createContext, useState, useEffect, useContext, useCallback } from "react";
import { Records } from "contextProviders/RecordsProvider";
import { request } from "fetcher";
import { activityType, moneyOrder } from "convention";

export const Balance = createContext();

export const BalanceProvider = ({ children }) => {
  const { updateRecord } = useContext(Records);
  const [wallet, setWallet] = useState();
  const [inputSum, setInputSum] = useState(0);

  useEffect(() => {
    (async () => {
      const initialWallet = await request.getData("wallet");
      setWallet(initialWallet);
    })();
  }, []);

  const updateBalance = (newWallet, newInputSum) => {
    setWallet(newWallet);
    setInputSum(newInputSum);
    request.patchData("wallet", "", newWallet);
  };

  const putMoneyBackInWallet = () => {
    if (!inputSum) return;
    const newWallet = packChange();
    updateBalance(newWallet, 0);
    updateRecord(activityType.RETURN_MONEY, inputSum);
  };

  const packChange = () => {
    const newWallet = {};
    moneyOrder.reduce((remainInputSum, moneyType) => {
      const currMoneyAmount = parseInt(remainInputSum / Number(moneyType));
      newWallet[moneyType] = wallet[moneyType] + currMoneyAmount;
      return remainInputSum % Number(moneyType);
    }, inputSum);

    return newWallet;
  };

  const calTotalBalance = () => {
    const totalBalance = moneyOrder.reduce(
      (balance, moneyType) => balance + moneyType * wallet[moneyType],
      0
    );
    return totalBalance;
  };

  return (
    <Balance.Provider
      value={{
        inputSum,
        wallet,
        setInputSum,
        updateBalance,
        calTotalBalance,
        putMoneyBackInWallet
      }}
    >
      {children}
    </Balance.Provider>
  );
};
