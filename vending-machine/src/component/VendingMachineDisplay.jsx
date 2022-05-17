import styled from "styled-components";

function VendingMachineDisplay() {
    // 총액=0 ? 판매중 : 총액
    return <DisplayText>판매중...</DisplayText>;
}

const DisplayText = styled.div`
    border: 2px solid black;
    margin-bottom: 20px;
    padding: 10px;
    color: #15e015;
    font-size: 2rem;
    background-color: black;
    border-radius: 10px;
`;

export default VendingMachineDisplay;
