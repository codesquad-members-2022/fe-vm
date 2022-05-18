import MoneySlot from "../../components/moneySlot/MoneySlot";
import Products from "../../components/product/Products";
import RecordBoard from "../../components/recordBoard/RecordBoard";
import { useVendingMachineContext } from "../../context/VendingMachineContext";
import { useWalletContext } from "../../context/WalletContext";
import {
    VendingMachineContainer,
    UserInterfaceContainer,
    ChangesButton,
} from "./VendingMachine.style";

function VendingMachine() {
    const {
        addRecord,
        moneyInVendingMachine,
        totalMoneyInVendingMachine,
        setMoneyInVendingMachine,
    } = useVendingMachineContext();
    const { wallet, updateWallet } = useWalletContext();

    const returnMoney = () => {
        if (!totalMoneyInVendingMachine) {
            return;
        }

        Object.keys(moneyInVendingMachine).forEach((moneyUnit) => {
            const moneyIndex = wallet.findIndex(
                (money) => money.unit === Number(moneyUnit)
            );
            wallet[moneyIndex].count += moneyInVendingMachine[moneyUnit];
        });
        updateWallet(wallet);
        addRecord(`잔돈 ${totalMoneyInVendingMachine}원 반환`);
        setMoneyInVendingMachine({});
    };

    return (
        <VendingMachineContainer>
            <Products />
            <UserInterfaceContainer>
                <MoneySlot />
                <ChangesButton onClick={returnMoney}>반환</ChangesButton>
                <RecordBoard />
            </UserInterfaceContainer>
        </VendingMachineContainer>
    );
}

export default VendingMachine;
