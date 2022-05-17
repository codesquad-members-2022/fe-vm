import { InvestmentContext, SetInvestmentContext } from "App";
import { useContext } from "react";

export default function useInvestment() {
  const [investment, setInvestment] = [useContext(InvestmentContext), useContext(SetInvestmentContext)];
  return [investment, setInvestment];
}
