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
        const moneyInWallet = wallet.findIndex(
            (money) => money.unit === moneyUnit
        );

        if (!moneyInWallet || !wallet[moneyInWallet].count) {
            return;
        }

        wallet[moneyInWallet].count -= 1;
        updateWallet(wallet);
        addRecord(`${wallet[moneyInWallet].unit}원이 투입됨`);
        putMoneyIntoVendingMachine(wallet[moneyInWallet].unit);
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
