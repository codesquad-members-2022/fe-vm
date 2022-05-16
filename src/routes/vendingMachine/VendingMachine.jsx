import MoneySlot from "../../components/moneySlot/MoneySlot";
import Products from "../../components/product/Products";
import RecordBoard from "../../components/recordBoard/RecordBoard";
import {
    VendingMachineContainer,
    UserInterfaceContainer,
    ChangesButton,
} from "./VendingMachine.style";

function VendingMachine() {
    return (
        <VendingMachineContainer>
            <Products />
            <UserInterfaceContainer>
                <MoneySlot />
                <ChangesButton>반환</ChangesButton>
                <RecordBoard />
            </UserInterfaceContainer>
        </VendingMachineContainer>
    );
}

export default VendingMachine;
