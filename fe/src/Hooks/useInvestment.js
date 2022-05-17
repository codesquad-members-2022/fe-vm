import { InvestmentContext, SetInvestmentContext } from "Context/InvestmentProvider";
import { useContext } from "react";

export default function useInvestment() {
  const [investment, setInvestment] = [useContext(InvestmentContext), useContext(SetInvestmentContext)];
  return [investment, setInvestment];
}
