import MoneySlot from "../../components/moneySlot/MoneySlot";
import Products from "../../components/product/Products";
import RecordBoard from "../../components/recordBoard/RecordBoard";
import ReturnButton from "../../components/returnButton/ReturnButton";
import {
    VendingMachineContainer,
    UserInterfaceContainer,
} from "./VendingMachine.style";

function VendingMachine() {
    return (
        <VendingMachineContainer>
            <Products />
            <UserInterfaceContainer>
                <MoneySlot />
                <ReturnButton />
                <RecordBoard />
            </UserInterfaceContainer>
        </VendingMachineContainer>
    );
}

export default VendingMachine;
