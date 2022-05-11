import { SlotContainer, Slot } from "./MoneySlot.style";

const getMoneyFromWallet = (input, wallet) => {
    const unitOfMoney = Object.keys(wallet);
    const differenceBetweenInputAndWalletMoney = unitOfMoney.map((unit) => {
        return {
            difference: Math.abs(input - unit),
            unit,
        };
    });
    const minDifference = differenceBetweenInputAndWalletMoney
        .sort((a, b) => a.difference - b.difference)
        .filter(({ unit }) => wallet[unit] > 0);

    return minDifference.length ? minDifference[0].unit : null;
};

function MoneySlot({
    addRecord,
    wallet,
    updateWallet,
    putMoneyIntoVendingMachine,
}) {
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
        wallet[moneyFromWallet] -= 1;
        updateWallet(wallet);
        addRecord(`${moneyFromWallet}원이 투입됨`);
        putMoneyIntoVendingMachine(moneyFromWallet);
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
