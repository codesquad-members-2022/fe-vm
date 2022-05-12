import styled from "styled-components";
import { RoundBorder } from "../../GlobalStyle";

const VendingMachineContainer = styled(RoundBorder)`
    display: flex;
    padding: 30px;
    width: 900px;
    height: 600px;
    gap: 30px;
`;

const UserInterfaceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ChangesButton = styled.button`
    width: 300px;
    font-size: 1.6rem;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`;

export { VendingMachineContainer, UserInterfaceContainer, ChangesButton };
