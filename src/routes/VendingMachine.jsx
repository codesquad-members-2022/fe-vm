import { useState } from "react";
import MoneySlot from "../components/MoneySlot";
import RecordBoard from "../components/RecordBoard";

function VendingMachine() {
    const [record, setRecord] = useState([]);

    const addRecord = (newRecord) => {
        setRecord([...record, newRecord]);
    };

    return (
        <>
            <h1>자판기</h1>
            <MoneySlot addRecord={addRecord} />
            <RecordBoard record={record} />
        </>
    );
}

export default VendingMachine;
