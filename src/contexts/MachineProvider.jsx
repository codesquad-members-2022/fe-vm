import VENDING_MACHINE_INFO from "constants/vendingMachineInfo";
import { createContext, useCallback, useEffect, useMemo, useReducer } from "react";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;

    case "COME_IN_COIN":
      const { storedMoney } = state;
      const increasedCoins = storedMoney.map((coin) => {
        return coin.id === action.targetId ? { ...coin, count: coin.count + 1 } : coin;
      });
      return { ...state, storedMoney: increasedCoins };

    default:
      throw Error("MachineProvider invalid type error");
  }
};
/**
 *  storedMoney: Array
 *  history: Array
 */
const MachineProvider = ({ children }) => {
  const [machineInfo, dispatch] = useReducer(reducer, {});

  const fetchMachineInfo = () => {
    const initData = VENDING_MACHINE_INFO;
    dispatch({ type: "INIT", data: initData });
  };

  const onComeInCoin = useCallback((targetId) => {
    dispatch({ type: "COME_IN_COIN", targetId });
  }, []);

  const dispatches = useMemo(() => {
    return {
      onComeInCoin,
    };
  }, []);

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

export const MachineStateContext = createContext();
export const MachineDispatchContext = createContext();
export default MachineProvider;
