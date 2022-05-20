import { createContext, useState } from 'react';

export const InputMoneyContext = createContext(0);

export function InputMoneyProvider({ children }) {
  const [inputMoney, setInputMoney] = useState(0);

  return <InputMoneyContext.Provider value={{ inputMoney, setInputMoney }}>{children}</InputMoneyContext.Provider>;
}
