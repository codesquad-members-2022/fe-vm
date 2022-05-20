import React, { useContext, useReducer } from "react";
import recordReducer from "./recordReducer";
import { moneyReducer, initialStateOfMoney } from "./moneyReducer";
import ACTION_TYPE from "./actionType";

const VendingMachineStateContext = React.createContext();
const VendingMachineDispatchContext = React.createContext();

export const useVendingMachineStateContext = () =>
    useContext(VendingMachineStateContext);
export const useVendingMachineDispatchContext = () =>
    useContext(VendingMachineDispatchContext);

function VendingMachineProvider({ children }) {
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

    const putMoneyIntoVendingMachine = (amountOfMoney) => {
        const moneyUnit = getMoneyUnitFromWallet(amountOfMoney);
        if (!moneyUnit) {
            return;
        }
        moneyDispatcher({ type: ACTION_TYPE.PUT, money: moneyUnit });
        recordDispatcher({ type: ACTION_TYPE.PUT, money: moneyUnit });
    };

    const returnMoneyFromVendingMachine = (amountOfMoney) => {
        moneyDispatcher({ type: ACTION_TYPE.RETURN, money: amountOfMoney });
        recordDispatcher({ type: ACTION_TYPE.RETURN, money: amountOfMoney });
    };

    const selectProduct = (product) => {
        recordDispatcher({ type: ACTION_TYPE.SELECT, product: product.name });
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

    return (
        <VendingMachineStateContext.Provider value={vendingMachineStateProps}>
            <VendingMachineDispatchContext.Provider
                value={vendingMachineDispatchProps}
            >
                {children}
            </VendingMachineDispatchContext.Provider>
        </VendingMachineStateContext.Provider>
    );
}

export default VendingMachineProvider;
