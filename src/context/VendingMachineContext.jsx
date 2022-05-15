import React, { useContext, useState } from "react";

const VendingMachineContext = React.createContext();
export const useVendingMachineContext = () => useContext(VendingMachineContext);

function VendingMachineProvider({ children }) {
    const [record, setRecord] = useState([]);
    const [moneyInVendingMachine, setMoneyInVendingMachine] = useState({});

    const addRecord = (newRecord) => {
        setRecord([...record, newRecord]);
    };

    const putMoneyIntoVendingMachine = (money) => {
        moneyInVendingMachine[money] = moneyInVendingMachine[money]
            ? moneyInVendingMachine[money] + 1
            : 1;
        setMoneyInVendingMachine(moneyInVendingMachine);
    };

    const vendingMachineProps = {
        record,
        addRecord,
        moneyInVendingMachine,
        putMoneyIntoVendingMachine,
    };

    return (
        <VendingMachineContext.Provider value={vendingMachineProps}>
            {children}
        </VendingMachineContext.Provider>
    );
}

export default VendingMachineProvider;
