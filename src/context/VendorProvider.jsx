import React, { createContext, useState } from 'react';

import { INPUT_STATE } from '@/constants/constants';
import cashData from '@/mocks/cash';
import productData from '@/mocks/product';

const VendorContext = createContext();

const VendorProvider = ({ children }) => {
  const [cash, setCash] = useState(cashData);
  const [product, setProduct] = useState(productData);
  const [balance, setBalance] = useState(0);
  const [userLog, setUserLog] = useState([]);
  const [userBalance, setUserBalance] = useState(0);
  const [inputState, setInputState] = useState(INPUT_STATE.default);
  const [input, setInput] = useState(0);

  return (
    <VendorContext.Provider
      value={{
        cash,
        setCash,
        product,
        setProduct,
        balance,
        setBalance,
        userLog,
        setUserLog,
        userBalance,
        setUserBalance,
        inputState,
        setInputState,
        input,
        setInput,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export { VendorContext, VendorProvider };
