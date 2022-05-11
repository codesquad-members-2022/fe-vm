import { useOutletContext } from "react-router-dom";
import MoneySlot from "../components/moneySlot/MoneySlot";
import Products from "../components/product/Products";
import RecordBoard from "../components/recordBoard/RecordBoard";
import {
    VendingMachineContainer,
    UserInputInformationContainer,
} from "./VendingMachine.style";

function VendingMachine() {
    const {
        wallet,
        record,
        addRecord,
        moneyInVendingMachine,
        putMoneyIntoVendingMachine,
    } = useOutletContext();

    return (
        <VendingMachineContainer>
            <Products moneyInVendingMachine={moneyInVendingMachine} />
            <UserInputInformationContainer>
                <MoneySlot
                    addRecord={addRecord}
                    wallet={wallet}
                    putMoneyIntoVendingMachine={putMoneyIntoVendingMachine}
                />
                <RecordBoard record={record} />
            </UserInputInformationContainer>
        </VendingMachineContainer>
    );
}

export default VendingMachine;
