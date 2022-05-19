import { createContext, useState, useEffect } from "react";
import { request } from "fetcher";

export const Balance = createContext();

export const BalanceProvider = ({ children }) => {
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

  return (
    <Balance.Provider
      value={{
        inputSum,
        wallet,
        setInputSum,
        updateBalance
      }}
    >
      {children}
    </Balance.Provider>
  );
};
