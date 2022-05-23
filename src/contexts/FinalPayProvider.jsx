/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';

export const FinalPayContext = createContext(0);
export const FinalPaySetContext = createContext(null);

export function FinalPayProvider({ children }) {
  const [finalPay, setFinalPay] = useState(0);

  return (
    <FinalPayContext.Provider value={finalPay}>
      <FinalPaySetContext.Provider value={setFinalPay}>{children}</FinalPaySetContext.Provider>
    </FinalPayContext.Provider>
  );
}
