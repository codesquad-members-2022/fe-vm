import { SlotContainer, Slot } from "./MoneySlot.style";
import { useVendingMachineDispatchContext } from "../../context/VendingMachineContext";
import { PAGE } from "../../constants";

function MoneySlot() {
    const { putMoneyIntoVendingMachine } = useVendingMachineDispatchContext();

    const inputMoney = (event) => {
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();
        const moneyInput = event.target.value;
        putMoneyIntoVendingMachine(moneyInput, PAGE.VM);
        event.target.value = "";
    };

    return (
        <SlotContainer>
            <Slot
                type="number"
                min="10"
                max="10000"
                onKeyDown={inputMoney}
                placeholder="0"
                step="10"
            ></Slot>
            <span>원</span>
        </SlotContainer>
    );
}

export default MoneySlot;
