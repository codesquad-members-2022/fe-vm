import { useOutletContext } from "react-router-dom";
import MoneySlot from "../components/MoneySlot";
import Products from "../components/Products";
import RecordBoard from "../components/RecordBoard";

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
            <h1>자판기</h1>
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
