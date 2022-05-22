import { useReducer } from "react";
import recordReducer from "./recordReducer";
import { moneyReducer, initialStateOfMoney } from "./moneyReducer";
import { ACTION_TYPE, PAGE } from "../constants";

const putActionCreator = (money) => {
    return { type: ACTION_TYPE.PUT, payload: { money } };
};
const returnActionCreator = (changes) => {
    return { type: ACTION_TYPE.RETURN, payload: { money: changes } };
};
const selectActionCreator = (product) => {
    return { type: ACTION_TYPE.SELECT, payload: { product } };
};

const useVendingMachine = () => {
    const [money, moneyDispatcher] = useReducer(
        moneyReducer,
        initialStateOfMoney
    );
    const [record, recordDispatcher] = useReducer(recordReducer, []);

    const getMoneyUnitFromWallet = (input) => {
        const differenceBetweenInputAndWalletMoney =
            money.wallet.moneyArray.map((money) => {
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

    const putMoneyIntoVendingMachine = (amountOfMoney, fromWhere) => {
        const moneyUnit =
            fromWhere === PAGE.VM
                ? getMoneyUnitFromWallet(amountOfMoney)
                : amountOfMoney;
        if (!moneyUnit) {
            return;
        }
        moneyDispatcher(putActionCreator(moneyUnit));
        recordDispatcher(putActionCreator(moneyUnit));
    };

    const returnMoneyFromVendingMachine = (amountOfMoney) => {
        moneyDispatcher(returnActionCreator(amountOfMoney));
        recordDispatcher(returnActionCreator(amountOfMoney));
    };

    const selectProduct = (product) => {
        recordDispatcher(selectActionCreator(product.name));
        const changes = money.vendingMachine.amount - product.price;
        returnMoneyFromVendingMachine(changes);
    };

    const vendingMachineStateProps = {
        money,
        record,
    };

    const vendingMachineDispatchProps = {
        putMoneyIntoVendingMachine,
        returnMoneyFromVendingMachine,
        selectProduct,
    };

    return { vendingMachineStateProps, vendingMachineDispatchProps };
};

export default useVendingMachine;
