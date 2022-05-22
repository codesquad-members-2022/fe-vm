import { useVendingMachineStateContext } from "../../context/VendingMachineContext";
import {
    WalletContainer,
    WalletItemContainer,
    WalletItem,
    TotalAmount,
} from "./Wallet.Style";
import MoneyUnitItem from "../../components/moneyUnit/MoneyUnitItem";

function Wallet() {
    const { money } = useVendingMachineStateContext();

    return (
        <WalletContainer>
            {money.wallet.moneyArray.map((moneyUnit) => (
                <WalletItemContainer key={moneyUnit.id}>
                    <MoneyUnitItem money={moneyUnit} />
                    <WalletItem>{moneyUnit.count}개</WalletItem>
                </WalletItemContainer>
            ))}
            <TotalAmount>{money.wallet.amount.toLocaleString()}원</TotalAmount>
        </WalletContainer>
    );
}

export default Wallet;
