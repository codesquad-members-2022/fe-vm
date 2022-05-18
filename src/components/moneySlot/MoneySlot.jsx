import { SlotContainer, Slot } from "./MoneySlot.style";
import { useVendingMachineContext } from "../../context/VendingMachineContext";
import { useWalletContext } from "../../context/WalletContext";

const getMoneyUnitFromWallet = (input, wallet) => {
    const differenceBetweenInputAndWalletMoney = wallet.map((money) => {
        return {
            difference: Math.abs(input - money.unit),
            ...money,
        };
    });
    const minDifference = differenceBetweenInputAndWalletMoney
        .sort((a, b) => a.difference - b.difference)
        .filter(({ count }) => count > 0);

    return minDifference.length ? minDifference[0].unit : null;
};

function MoneySlot() {
    const { wallet, updateWallet } = useWalletContext();
    const { addRecord, putMoneyIntoVendingMachine } =
        useVendingMachineContext();

    const putMoney = (event) => {
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();
        const moneyInput = event.target.value;
        event.target.value = "";

        const moneyUnitFromWallet = getMoneyUnitFromWallet(moneyInput, wallet);
        if (!moneyUnitFromWallet) {
            return;
        }

        const moneyInWallet = wallet.find(
            (money) => money.unit === moneyUnitFromWallet
        );
        moneyInWallet.count -= 1;
        updateWallet(wallet);
        putMoneyIntoVendingMachine(moneyInWallet.unit);
        addRecord(`${moneyInWallet.unit}원이 투입됨`);
    };

    return (
        <SlotContainer>
            <Slot
                type="number"
                min="10"
                max="10000"
                onKeyDown={putMoney}
                placeholder="0"
            ></Slot>
            <span>원</span>
        </SlotContainer>
    );
}

export default MoneySlot;
