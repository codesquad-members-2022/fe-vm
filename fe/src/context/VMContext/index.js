import React, { useReducer, createContext, useMemo, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { vmInitiState, vmReducer } from './reducer';
import { GET_REST_UNITS } from './type';

const Context = createContext();

export const useVMContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useVMContext must be used within VMContext');
  }

  return context;
};

export default function VMContext({ children }) {
  const [state, dispatch] = useReducer(vmReducer, vmInitiState);

  const divideBalance = useCallback((changesUnits, totalBalance) => {
    const resetUnit = getRestUnit(changesUnits, totalBalance);
    dispatch({ type: GET_REST_UNITS, payload: resetUnit });
  }, []);

  const VMdispatch = useMemo(
    () => ({
      divideBalance,
    }),
    [divideBalance],
  );

  const providerValue = useMemo(() => ({ ...state, ...VMdispatch }), [VMdispatch, state]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

VMContext.propTypes = {
  children: PropTypes.element.isRequired,
};

const getRestUnit = (units, totalBalance) => {
  const { resultArr: newChangesUnits } = [...units]
    .sort((prev, cur) => cur.unit - prev.unit)
    .reduce(
      ({ rest, resultArr }, cur) => {
        const taretCount = Math.floor(rest / cur.unit);
        const newRest = rest % cur.unit;
        return { rest: newRest, resultArr: [{ ...cur, count: taretCount }, ...resultArr] };
      },
      { rest: totalBalance, resultArr: [] },
    );
  return newChangesUnits;
};
