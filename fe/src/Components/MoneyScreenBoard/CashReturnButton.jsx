import { ReturnButton } from "./CashReturnButton.styled";
import useResetInvestment from "Hooks/useResetInvestment";

export default function CashReturnButton() {
  const handleResetInvestment = useResetInvestment();
  return (
    <ReturnButton
      flex
      justify="center"
      align="center"
      onClick={() => {
        handleResetInvestment();
      }}
    >
      거스름돈 반환
    </ReturnButton>
  );
}
