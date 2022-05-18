import { useVendingMachineContext } from "../../context/VendingMachineContext";
import { useWalletContext } from "../../context/WalletContext";
import {
    WalletContainer,
    WalletItemContainer,
    WalletItem,
    MoneyUnit,
    TotalAmount,
} from "./Wallet.Style";

function Wallet() {
    const { wallet, totalAmount, updateWallet } = useWalletContext();
    const { addRecord, putMoneyIntoVendingMachine } =
        useVendingMachineContext();

    const takeMoneyFromWallet = (moneyUnit) => {
        const moneyInWallet = wallet.find(
            (money) => money.unit === moneyUnit && money.count > 0
        );

        if (!moneyInWallet) {
            return;
        }

        moneyInWallet.count -= 1;
        updateWallet(wallet);
        putMoneyIntoVendingMachine(moneyInWallet.unit);
        addRecord(`${moneyInWallet.unit}원이 투입됨`);
    };

    return (
        <WalletContainer>
            {wallet.map((moneyUnit) => (
                <WalletItemContainer key={moneyUnit.id}>
                    <MoneyUnit
                        disabled={!moneyUnit.count}
                        onClick={() => takeMoneyFromWallet(moneyUnit.unit)}
                    >
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
