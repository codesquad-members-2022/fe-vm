import { useContext } from "react";
import MoneyAmount from "../components/Wallet/MoneyAmount";
import { WalletContext } from "../contexts/WalletContext";

export default function Wallet() {
  const { amountOfMoney, getTotalMoney, insertMoney } = useContext(WalletContext);

  return (
    <div>
      {Object.entries(amountOfMoney).map(([value, amount]) => (
        <MoneyAmount key={value} value={value} amount={amount} />
      ))}
      <div>총 금액은 {getTotalMoney().toLocaleString()}원 있다.</div>
    </div>
  );
}
