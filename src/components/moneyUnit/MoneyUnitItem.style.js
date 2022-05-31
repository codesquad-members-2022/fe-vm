import styled from "styled-components";
import { WalletItem } from "../../routes/wallet/Wallet.Style";

const MoneyUnit = styled(WalletItem)`
    &:hover {
        ${({ disabled }) =>
            disabled ? "" : "background-color: rgba(1, 1, 1, 0.07)"};
    }
`;

export default MoneyUnit;
