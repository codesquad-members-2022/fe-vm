import styled from "styled-components";

function HistoryLog() {
    return (
        <OutLine>
            <p>HIstory Log</p>
        </OutLine>
    );
}

const OutLine = styled.div`
    border: 2px solid black;
    height: 215px;
    text-align: center;
    font-size: 1.5rem;
`;

export default HistoryLog;
