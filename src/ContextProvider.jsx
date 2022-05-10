import { createContext, useState } from "react";

export const InputBalanceContext = createContext();

export const InputBalanceContextProvider = ({ children }) => {
  const [inputBalance, setInputBalance] = useState(1500);
  return (
    <InputBalanceContext.Provider
      value={{
        inputBalance,
        setInputBalance
      }}
    >
      {children}
    </InputBalanceContext.Provider>
  );
};
