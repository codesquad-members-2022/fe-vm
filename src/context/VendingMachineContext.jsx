import React, { useContext, useReducer } from "react";
import recordReducer from "./recordReducer";
import { moneyReducer, initialStateOfMoney } from "./moneyReducer";

const VendingMachineContext = React.createContext();
export const useVendingMachineContext = () => useContext(VendingMachineContext);

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
        moneyDispatcher({ type: "put", money: moneyUnit });
        recordDispatcher({ type: "put", money: moneyUnit });
    };

    const returnMoneyFromVendingMachine = (amountOfMoney) => {
        moneyDispatcher({ type: "return", money: amountOfMoney });
        recordDispatcher({ type: "return", money: amountOfMoney });
    };

    const selectProduct = (productName) => {
        recordDispatcher({ type: "select", product: productName });
    };

    const vendingMachineProps = {
        money,
        record,
        putMoneyIntoVendingMachine,
        returnMoneyFromVendingMachine,
        selectProduct,
    };

    return (
        <VendingMachineContext.Provider value={vendingMachineProps}>
            {children}
        </VendingMachineContext.Provider>
    );
}

export default VendingMachineProvider;
