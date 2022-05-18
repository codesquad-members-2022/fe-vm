import { useWalletContext } from "../../context/WalletContext";
import {
    WalletContainer,
    WalletItemContainer,
    WalletItem,
    MoneyUnit,
    TotalAmount,
} from "./Wallet.Style";

function Wallet() {
    const { wallet, totalAmount } = useWalletContext();

    return (
        <WalletContainer>
            {wallet.map((moneyUnit) => (
                <WalletItemContainer key={moneyUnit.id}>
                    <MoneyUnit disabled={!moneyUnit.count}>
                        {moneyUnit.unit}원
                    </MoneyUnit>
                    <WalletItem>{moneyUnit.count}개</WalletItem>
                </WalletItemContainer>
            ))}
            <TotalAmount>{totalAmount.toLocaleString()}원</TotalAmount>
        </WalletContainer>
    );
}

export default Wallet;
