import { useOutletContext } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
    WalletContainer,
    WalletItemContainer,
    WalletItem,
    TotalAmount,
} from "./Wallet.Style";

function Wallet() {
    const { wallet } = useOutletContext();
    const totalAmount = Object.keys(wallet).reduce(
        (acc, moneyUnit) => acc + moneyUnit * wallet[moneyUnit],
        0
    );

    return (
        <WalletContainer>
            {Object.keys(wallet).map((moneyUnit) => (
                <WalletItemContainer key={uuid()}>
                    <WalletItem>{moneyUnit}원</WalletItem>
                    <WalletItem>{wallet[moneyUnit]}개</WalletItem>
                </WalletItemContainer>
            ))}
            <TotalAmount>{totalAmount.toLocaleString()}원</TotalAmount>
        </WalletContainer>
    );
}

export default Wallet;
