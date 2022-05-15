import { SlotContainer, Slot } from "./MoneySlot.style";
import { useVendingMachine } from "../../context/VendingMachineContext";
import { useWallet } from "../../context/WalletContext";

const getMoneyFromWallet = (input, wallet) => {
    const differenceBetweenInputAndWalletMoney = wallet.map((money) => {
        return {
            difference: Math.abs(input - money.unit),
            ...money,
        };
    });
    const minDifference = differenceBetweenInputAndWalletMoney
        .sort((a, b) => a.difference - b.difference)
        .filter(({ count }) => count > 0);

    return minDifference.length ? minDifference[0] : null;
};

function MoneySlot() {
    const { wallet, updateWallet } = useWallet();
    const { addRecord, putMoneyIntoVendingMachine } = useVendingMachine();

    const putMoney = (event) => {
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();
        const moneyInput = event.target.value;
        event.target.value = "";

        const moneyFromWallet = getMoneyFromWallet(moneyInput, wallet);
        if (!moneyFromWallet) {
            return;
        }

        const moneyInWallet = wallet.find(
            (money) => money.id === moneyFromWallet.id
        );
        moneyInWallet.count -= 1;
        updateWallet(wallet);
        addRecord(`${moneyFromWallet.unit}원이 투입됨`);
        putMoneyIntoVendingMachine(moneyFromWallet.unit);
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
