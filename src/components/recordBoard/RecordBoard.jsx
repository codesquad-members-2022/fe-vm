import { v4 as uuid } from "uuid";
import { useVendingMachineStateContext } from "../../context/VendingMachineContext";
import { RecordContainer } from "./RecordBoard.style";

function RecordBoard() {
    const { record } = useVendingMachineStateContext();

    return (
        <RecordContainer>
            {record.map((r) => (
                <p key={uuid()}>{r}</p>
            ))}
        </RecordContainer>
    );
}

export default RecordBoard;
