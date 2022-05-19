import { v4 as uuid } from "uuid";
import { useVendingMachineContext } from "../../context/VendingMachineContext";
import { RecordContainer } from "./RecordBoard.style";

function RecordBoard() {
    const { money } = useVendingMachineContext();

    return (
        <RecordContainer>
            {money.record.map((r) => (
                <p key={uuid()}>{r}</p>
            ))}
        </RecordContainer>
    );
}

export default RecordBoard;
