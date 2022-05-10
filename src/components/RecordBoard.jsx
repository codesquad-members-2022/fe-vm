import { v4 as uuid } from "uuid";

function RecordBoard({ record }) {
    return record.map((r) => <p key={uuid()}>{r}</p>);
}

export default RecordBoard;
