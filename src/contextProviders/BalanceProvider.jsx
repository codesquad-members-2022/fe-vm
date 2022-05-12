import { createContext, useState, useEffect } from "react";
import { fetchData } from "../fetcher";

export const Balance = createContext();

export const BalanceProvider = ({ children }) => {
  const [wallet, setWallet] = useState();
  const [inputSum, setInputSum] = useState(0);

  useEffect(() => {
    (async () => {
      const initialWallet = await fetchData("wallet");
      setWallet(initialWallet);
    })();
  }, []);

  const updateBalance = (newWallet, newInputSum) => {
    setWallet(newWallet);
    setInputSum(newInputSum);
  };

  return (
    <Balance.Provider
      value={{
        wallet,
        inputSum,
        setInputSum,
        updateBalance
      }}
    >
      {children}
    </Balance.Provider>
  );
};
