import React, { useContext } from "react";
import useVendingMachine from "./useVendingMachine";

const VendingMachineStateContext = React.createContext();
const VendingMachineDispatchContext = React.createContext();

export const useVendingMachineStateContext = () =>
    useContext(VendingMachineStateContext);
export const useVendingMachineDispatchContext = () =>
    useContext(VendingMachineDispatchContext);

function VendingMachineProvider({ children }) {
    const { vendingMachineStateProps, vendingMachineDispatchProps } =
        useVendingMachine();

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
