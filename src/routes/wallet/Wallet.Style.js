import styled from "styled-components";
import { RoundBorder } from "../../GlobalStyle";

const WalletContainer = styled(RoundBorder)`
    ${({ theme }) => theme.flexLayoutMixin("column")};
    padding: 30px;
    width: 300px;
    height: 600px;
    gap: 20px;
`;

const WalletItemContainer = styled.div`
    ${({ theme }) => theme.flexLayoutMixin()};
    width: 100%;
    height: 50px;
    gap: 20px;
`;

const WalletItem = styled(RoundBorder)`
    width: 150px;
    height: 100%;
    line-height: 50px;
    font-size: 1.6rem;
    text-align: center;
    cursor: default;
`;

const MoneyUnit = styled(WalletItem)`
    &:hover {
        ${({ disabled }) =>
            disabled ? "" : "background-color: rgba(1, 1, 1, 0.07)"};
    }
`;

const TotalAmount = styled(RoundBorder)`
    width: 100%;
    line-height: 50px;
    font-size: 1.8rem;
    text-align: center;
    cursor: default;
`;

export {
    WalletContainer,
    WalletItemContainer,
    WalletItem,
    MoneyUnit,
    TotalAmount,
};
