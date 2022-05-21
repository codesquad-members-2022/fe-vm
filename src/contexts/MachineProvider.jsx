import { createContext, useCallback, useEffect, useMemo, useReducer } from "react";
import { API } from "utils";

const reducer = (state, action) => {
  const { totalMoney, history } = state;
  switch (action.type) {
    case "INIT":
      return action.data;

    case "MONEY_INCREASE":
      return { ...state, totalMoney: totalMoney + action.inputMoney };

    case "MONEY_DECREASE":
      return { ...state, totalMoney: totalMoney - action.price };

    case "RETURN":
      return;

    case "HISTORY_ADD":
      const addedHistory = history;
      return addedHistory;

    case "HISTORY_REFRESH":
      return [];

    default:
      throw new Error("MachineProvider Invalid Type");
  }
};

export const MachineStateContext = createContext();
export const MachineDispatchContext = createContext();

const initialState = { totalMoney: 0, history: [] };

const MachineProvider = ({ children }) => {
  const [machineInfo, dispatch] = useReducer(reducer, initialState);

  const fetchMachineInfo = async () => {
    const { data: initMachineInfo } = await API.getVMInfo();

    dispatch({ type: "INIT", data: initMachineInfo });
  };

  const onComeInCoin = useCallback((inputMoney) => {
    dispatch({ type: "MONEY_INCREASE", inputMoney });
  }, []);

  const onDecreaseMoneyInMachine = useCallback((price) => {
    dispatch({ type: "MONEY_DECREASE", price });
  }, []);

  const dispatches = useMemo(() => {
    return {
      onComeInCoin,
      onDecreaseMoneyInMachine,
    };
  }, [onComeInCoin, onDecreaseMoneyInMachine]);

  useEffect(() => {
    fetchMachineInfo();
  }, []);

  return (
    <MachineStateContext.Provider value={machineInfo}>
      <MachineDispatchContext.Provider value={dispatches}>
        {children}
      </MachineDispatchContext.Provider>
    </MachineStateContext.Provider>
  );
};

export default MachineProvider;
