import React, { useState } from "react";

export const InvestmentTimerContext = React.createContext([]);
export const SetInvestmentTimerContext = React.createContext(() => {});

export default function InvestmentTimerProvider({ children }) {
  const [investmentTimer, setInvestmentTimer] = useState(0);

  return (
    <SetInvestmentTimerContext.Provider value={setInvestmentTimer}>
      <InvestmentTimerContext.Provider value={investmentTimer}>{children}</InvestmentTimerContext.Provider>
    </SetInvestmentTimerContext.Provider>
  );
}
