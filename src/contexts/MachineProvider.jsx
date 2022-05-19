import VENDING_MACHINE_INFO from "constants/vendingMachineInfo";
import { calcTotalMoney } from "helpers/calculateMoney";
import { createContext, useCallback, useEffect, useMemo, useReducer } from "react";

const reducer = (state = {}, action) => {
  const { storedMoney, totalMoney, history } = state;

  switch (action.type) {
    case "INIT":
      return action.data;

    case "INCREASE":
      const increasedCoins = storedMoney.map((coin) => {
        return coin.id === action.targetId ? { ...coin, count: coin.count + 1 } : coin;
      });
      return { ...state, storedMoney: increasedCoins, totalMoney: calcTotalMoney(increasedCoins) };

    case "DECREASE":
      const decreasedCoins = storedMoney.map((coin) => {
        return coin.id === action.targetId ? { ...coin, count: coin.count - 1 } : coin;
      });
      return { ...state, storedMoney: decreasedCoins, totalMoney: calcTotalMoney(increasedCoins) };

    // TODO 자판기 반환 로직

    case "HISTORY_ADD":
      const addedHistory = history;
      return addedHistory;

    case "HISTORY_REFRESH":
      return [];

    default:
      throw new Error("MachineProvider Invalid Type");
  }
};

const MachineProvider = ({ children }) => {
  const [machineInfo, dispatch] = useReducer(reducer, {});

  const fetchMachineInfo = () => {
    const initData = VENDING_MACHINE_INFO;
    dispatch({ type: "INIT", data: initData });
  };

  const onComeInCoin = useCallback((targetId) => {
    dispatch({ type: "INCREASE", targetId });
  }, []);

  const dispatches = useMemo(() => {
    return {
      onComeInCoin,
    };
  }, [onComeInCoin]);

  useEffect(() => {
    fetchMachineInfo();
  }, []);

  console.log("machineInfo :>> ", machineInfo);

  return (
    <MachineStateContext.Provider value={machineInfo}>
      <MachineDispatchContext.Provider value={dispatches}>
        {children}
      </MachineDispatchContext.Provider>
    </MachineStateContext.Provider>
  );
};

export const MachineStateContext = createContext();
export const MachineDispatchContext = createContext();
export default MachineProvider;
