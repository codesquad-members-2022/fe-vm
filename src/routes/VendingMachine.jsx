import { useOutletContext } from "react-router-dom";
import MoneySlot from "../components/moneySlot/MoneySlot";
import Products from "../components/product/Products";
import RecordBoard from "../components/recordBoard/RecordBoard";

function VendingMachine() {
    const {
        wallet,
        record,
        addRecord,
        moneyInVendingMachine,
        putMoneyIntoVendingMachine,
    } = useOutletContext();

    return (
        <>
            <Products moneyInVendingMachine={moneyInVendingMachine} />
            <MoneySlot
                addRecord={addRecord}
                wallet={wallet}
                putMoneyIntoVendingMachine={putMoneyIntoVendingMachine}
            />
            <RecordBoard record={record} />
        </>
    );
}

export default VendingMachine;
