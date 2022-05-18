import React, { useContext, useState, useMemo, useCallback } from "react";

const VendingMachineContext = React.createContext();
export const useVendingMachineContext = () => useContext(VendingMachineContext);

function VendingMachineProvider({ children }) {
    const [record, setRecord] = useState([]);
    const [moneyInVendingMachine, setMoneyInVendingMachine] = useState({});

    const addRecord = useCallback((newRecord) => {
        setRecord((prevRecord) => [...prevRecord, newRecord]);
    }, []);

    const putMoneyIntoVendingMachine = (money) => {
        moneyInVendingMachine[money] = moneyInVendingMachine[money]
            ? moneyInVendingMachine[money] + 1
            : 1;
        setMoneyInVendingMachine({ ...moneyInVendingMachine });
    };

    const totalMoneyInVendingMachine = useMemo(
        () =>
            Object.keys(moneyInVendingMachine).reduce(
                (acc, unit) => acc + moneyInVendingMachine[unit] * Number(unit),
                0
            ),
        [moneyInVendingMachine]
    );

    const vendingMachineProps = {
        record,
        addRecord,
        moneyInVendingMachine,
        totalMoneyInVendingMachine,
        putMoneyIntoVendingMachine,
        setMoneyInVendingMachine,
    };

    return (
        <VendingMachineContext.Provider value={vendingMachineProps}>
            {children}
        </VendingMachineContext.Provider>
    );
}

export default VendingMachineProvider;
