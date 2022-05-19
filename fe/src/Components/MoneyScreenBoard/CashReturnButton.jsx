import { ReturnButton } from "./CashReturnButton.styled";
import useResetInvestment from "Hooks/useResetInvestment";
import { useContext } from "react";
import { OrderInProgressContext } from "Context/OrderInProgressProvider";

export default function CashReturnButton() {
  const handleResetInvestment = useResetInvestment();
  const orderInProgress = useContext(OrderInProgressContext);
  return (
    <ReturnButton
      flex
      justify="center"
      align="center"
      onClick={() => {
        if (orderInProgress) {
          return;
        }
        handleResetInvestment();
      }}
    >
      거스름돈 반환
    </ReturnButton>
  );
}
