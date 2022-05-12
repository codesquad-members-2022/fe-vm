import styled from "styled-components";
import { RoundBorder } from "../GlobalStyle";

const WalletWrapper = styled(RoundBorder)`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 250px;
    height: 600px;
    gap: 20px;
`;

const WalletItemContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const WalletItem = styled(RoundBorder)`
    width: 80px;
    font-size: 1.4rem;
    padding: 10px;
    text-align: center;
`;

export { WalletWrapper, WalletItemContainer, WalletItem };
