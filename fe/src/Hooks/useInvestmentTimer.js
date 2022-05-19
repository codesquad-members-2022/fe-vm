import { InvestmentTimerContext, SetInvestmentTimerContext } from "Context/InvestmentTimerProvider";
import { useContext } from "react";
import useResetInvestment from "./useResetInvestment";

export default function useInvestmentTimer() {
  const [investmentTimer, setInvestmentTimer] = [
    useContext(InvestmentTimerContext),
    useContext(SetInvestmentTimerContext),
  ];
  const handleReset = useResetInvestment();

  const resetInvestment = (time) => {
    clearTimeout(investmentTimer);
    const newTimer = setTimeout(() => {
      handleReset();
    }, time);
    setInvestmentTimer(newTimer);
  };

  return resetInvestment;
}
