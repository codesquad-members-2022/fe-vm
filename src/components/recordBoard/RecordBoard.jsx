import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { VendingMachineContext } from "../../routes/home/Home";
import { RecordContainer } from "./RecordBoard.style";

function RecordBoard() {
    const { record } = useContext(VendingMachineContext);

    return (
        <RecordContainer>
            {record.map((r) => (
                <p key={uuid()}>{r}</p>
            ))}
        </RecordContainer>
    );
}

export default RecordBoard;
