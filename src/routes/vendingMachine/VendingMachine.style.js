import styled from "styled-components";
import { RoundBorder } from "../../GlobalStyle";

const VendingMachineContainer = styled(RoundBorder)`
    ${({ theme }) => theme.flexLayoutMixin()};
    padding: 30px;
    width: 900px;
    height: 600px;
    gap: 30px;
`;

const UserInterfaceContainer = styled.div`
    ${({ theme }) => theme.flexLayoutMixin("column")};
    gap: 20px;
`;

export { VendingMachineContainer, UserInterfaceContainer };
