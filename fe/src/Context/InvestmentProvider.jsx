import React from "react";

export const InvestmentContext = React.createContext({});
export const SetInvestmentContext = React.createContext(() => {});

export default function InvestMentProvider({ state, setState, children }) {
  return (
    <SetInvestmentContext.Provider value={setState}>
      <InvestmentContext.Provider value={state}>{children}</InvestmentContext.Provider>
    </SetInvestmentContext.Provider>
  );
}
