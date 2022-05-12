import React, { useState, createContext } from "react";

const InputAmountContext = createContext({
  inputAmount: 0,
  addAmount: () => {},
  subtractAmount: () => {},
});

function InputAmountProvider({ children }) {
  const [inputAmount, setInputAmount] = useState(0);

  function addAmount(money) {
    setInputAmount(inputAmount + money);
  }
  function subtractAmount(money) {
    setInputAmount(inputAmount - money);
  }

  const value = { inputAmount, addAmount, subtractAmount };
  return <InputAmountContext.Provider value={value}>{children}</InputAmountContext.Provider>;
}

export { InputAmountContext, InputAmountProvider };
