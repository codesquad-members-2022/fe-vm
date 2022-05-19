import { INVESTMENT_API } from "Helper/constant";
import useFetch from "Hooks/useFetch";
import React from "react";

export const InvestmentContext = React.createContext({});
export const SetInvestmentContext = React.createContext(() => {});

export default function InvestMentProvider({ children }) {
  const [investment, setInvestment] = useFetch(INVESTMENT_API);

  return (
    <SetInvestmentContext.Provider value={setInvestment}>
      <InvestmentContext.Provider value={investment}>{children}</InvestmentContext.Provider>
    </SetInvestmentContext.Provider>
  );
}
