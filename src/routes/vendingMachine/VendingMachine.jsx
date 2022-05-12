import { useOutletContext } from "react-router-dom";
import MoneySlot from "../../components/moneySlot/MoneySlot";
import Products from "../../components/product/Products";
import RecordBoard from "../../components/recordBoard/RecordBoard";
import {
    VendingMachineContainer,
    UserInterfaceContainer,
    ChangesButton,
} from "./VendingMachine.style";

function VendingMachine() {
    const {
        wallet,
        updateWallet,
        record,
        addRecord,
        moneyInVendingMachine,
        putMoneyIntoVendingMachine,
    } = useOutletContext();

    return (
        <VendingMachineContainer>
            <Products moneyInVendingMachine={moneyInVendingMachine} />
            <UserInterfaceContainer>
                <MoneySlot
                    addRecord={addRecord}
                    wallet={wallet}
                    updateWallet={updateWallet}
                    putMoneyIntoVendingMachine={putMoneyIntoVendingMachine}
                />
                <ChangesButton>반환</ChangesButton>
                <RecordBoard record={record} />
            </UserInterfaceContainer>
        </VendingMachineContainer>
    );
}

export default VendingMachine;
