import { useVendingMachineContext } from "../../context/VendingMachineContext";
import { useWalletContext } from "../../context/WalletContext";
import { ChangesButton } from "./ReturnButton.style";

function ReturnButton() {
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

    return <ChangesButton onClick={returnMoney}>반환</ChangesButton>;
}

export default ReturnButton;
