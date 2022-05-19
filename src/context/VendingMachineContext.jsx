import React, { useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

const VendingMachineContext = React.createContext();
export const useVendingMachineContext = () => useContext(VendingMachineContext);

function VendingMachineProvider({ children }) {
    const [money, moneyDispatcher] = useReducer(reducer, initialState);

    const putMoneyIntoVendingMachine = (amountOfMoney) => {
        moneyDispatcher({ type: "put", money: amountOfMoney });
    };

    const returnMoneyFromVendingMachine = (amountOfMoney) => {
        moneyDispatcher({ type: "return", money: amountOfMoney });
    };

    const vendingMachineProps = {
        money,
        putMoneyIntoVendingMachine,
        returnMoneyFromVendingMachine,
    };

    return (
        <VendingMachineContext.Provider value={vendingMachineProps}>
            {children}
        </VendingMachineContext.Provider>
    );
}

export default VendingMachineProvider;
