import { useWallet } from "../../context/WalletContext";
import {
    WalletContainer,
    WalletItemContainer,
    WalletItem,
    TotalAmount,
} from "./Wallet.Style";

function Wallet() {
    const { wallet } = useWallet();
    const totalAmount = wallet.reduce(
        (acc, money) => acc + money.unit * money.count,
        0
    );

    return (
        <WalletContainer>
            {wallet.map((moneyUnit) => (
                <WalletItemContainer key={moneyUnit.id}>
                    <WalletItem>{moneyUnit.unit}원</WalletItem>
                    <WalletItem>{moneyUnit.count}개</WalletItem>
                </WalletItemContainer>
            ))}
            <TotalAmount>{totalAmount.toLocaleString()}원</TotalAmount>
        </WalletContainer>
    );
}

export default Wallet;
