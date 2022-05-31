import {
    useVendingMachineStateContext,
    useVendingMachineDispatchContext,
} from "../../context/VendingMachineContext";
import { ChangesButton } from "./ReturnButton.style";

function ReturnButton() {
    const { money } = useVendingMachineStateContext();
    const { returnMoneyFromVendingMachine } =
        useVendingMachineDispatchContext();

    const returnMoney = () => {
        if (!money.vendingMachine.amount) {
            return;
        }
        returnMoneyFromVendingMachine(money.vendingMachine.amount);
    };

    return <ChangesButton onClick={returnMoney}>반환</ChangesButton>;
}

export default ReturnButton;
