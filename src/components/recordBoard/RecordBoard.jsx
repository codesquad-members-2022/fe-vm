import { v4 as uuid } from "uuid";
import { RecordContainer } from "./RecordBoard.style";

function RecordBoard({ record }) {
    return (
        <RecordContainer>
            {record.map((r) => (
                <p key={uuid()}>{r}</p>
            ))}
        </RecordContainer>
    );
}

export default RecordBoard;
