import React, { useState, createContext } from "react";

const InputAmountContext = createContext({
  inputAmount: 0,
  addAmount: () => {},
  subtractAmount: () => {},
});

function InputAmountProvider({ children }) {
  const [inputAmount, setInputAmount] = useState(0);

  function addInputAmount(money) {
    setInputAmount(inputAmount + money);
  }
  function subtractInputAmount(money) {
    setInputAmount(inputAmount - money);
  }

  const value = { inputAmount, addInputAmount, subtractInputAmount };
  return <InputAmountContext.Provider value={value}>{children}</InputAmountContext.Provider>;
}

export { InputAmountContext, InputAmountProvider };
