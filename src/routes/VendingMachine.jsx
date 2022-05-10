import { useOutletContext } from "react-router-dom";
import MoneySlot from "../components/MoneySlot";
import RecordBoard from "../components/RecordBoard";

function VendingMachine() {
    const { wallet, record, addRecord } = useOutletContext();

    return (
        <>
            <h1>자판기</h1>
            <MoneySlot addRecord={addRecord} wallet={wallet} />
            <RecordBoard record={record} />
        </>
    );
}

export default VendingMachine;
