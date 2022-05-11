import LogMessages from "../components/VendingMachine/LogMessages";
import MoneySlot from "../components/VendingMachine/MoneySlot";
import ReturnButton from "../components/VendingMachine/ReturnButton";
import Showcase from "../components/VendingMachine/Showcase";

export default function VendingMachine() {
  return (
    <div>
      <Showcase />
      <div>
        <MoneySlot />
        <ReturnButton />
        <LogMessages />
      </div>
    </div>
  );
}
