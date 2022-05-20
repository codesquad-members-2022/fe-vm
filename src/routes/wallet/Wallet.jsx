import {
    useVendingMachineStateContext,
    useVendingMachineDispatchContext,
} from "../../context/VendingMachineContext";
import {
    WalletContainer,
    WalletItemContainer,
    WalletItem,
    MoneyUnit,
    TotalAmount,
} from "./Wallet.Style";

function Wallet() {
    const { money } = useVendingMachineStateContext();
    const { putMoneyIntoVendingMachine } = useVendingMachineDispatchContext();

    const takeMoneyFromWallet = (moneyUnit) => {
        if (!moneyUnit.count) {
            return;
        }
        putMoneyIntoVendingMachine(moneyUnit.unit);
    };

    return (
        <WalletContainer>
            {money.wallet.moneyArray.map((moneyUnit) => (
                <WalletItemContainer key={moneyUnit.id}>
                    <MoneyUnit
                        disabled={!moneyUnit.count}
                        onClick={() => takeMoneyFromWallet(moneyUnit)}
                    >
                        {moneyUnit.unit}원
                    </MoneyUnit>
                    <WalletItem>{moneyUnit.count}개</WalletItem>
                </WalletItemContainer>
            ))}
            <TotalAmount>{money.wallet.amount.toLocaleString()}원</TotalAmount>
        </WalletContainer>
    );
}

export default Wallet;
