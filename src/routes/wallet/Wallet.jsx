import { useVendingMachineContext } from "../../context/VendingMachineContext";
import {
    WalletContainer,
    WalletItemContainer,
    WalletItem,
    MoneyUnit,
    TotalAmount,
} from "./Wallet.Style";

function Wallet() {
    const { money, putMoneyIntoVendingMachine } = useVendingMachineContext();

    const takeMoneyFromWallet = (moneyUnit) => {
        putMoneyIntoVendingMachine(moneyUnit);
    };

    return (
        <WalletContainer>
            {money.wallet.moneyArray.map((moneyUnit) => (
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
            <TotalAmount>{money.wallet.amount.toLocaleString()}원</TotalAmount>
        </WalletContainer>
    );
}

export default Wallet;
