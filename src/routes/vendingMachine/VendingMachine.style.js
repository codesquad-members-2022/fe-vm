import styled from "styled-components";
import { RoundBorder } from "../../GlobalStyle";

const VendingMachineContainer = styled(RoundBorder)`
    display: flex;
    padding: 30px;
    width: 900px;
    height: 600px;
    gap: 30px;
`;

const UserInputInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export { VendingMachineContainer, UserInputInformationContainer };
