import React, { useReducer, createContext, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const CHANGES_UNITS = [
  { id: 10, unit: 10, count: 0 },
  { id: 500, unit: 500, count: 0 },
  { id: 50, unit: 50, count: 0 },
  { id: 100, unit: 100, count: 0 },
  { id: 5000, unit: 5000, count: 0 },
  { id: 1000, unit: 1000, count: 0 },
  { id: 10000, unit: 10000, count: 0 },
];

const TOTAL_BALANCE = 23500;

const initialState = {
  totalBalance: TOTAL_BALANCE,
  changesUnits: CHANGES_UNITS,
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'setRestUnit':
      return {
        ...state,
        changesUnits: action.value,
      };

    default:
      return { ...state };
  }
};

function VMcontext({ children }) {
  const [VMstate, VMdispatch] = useReducer(reducer, initialState);
  const { changesUnits, totalBalance } = VMstate;
  const providerValue = useMemo(() => ({ VMstate, VMdispatch }), [VMstate]);

  const divideBalance = useCallback(() => {
    const resetUnit = getRestUnit(changesUnits, totalBalance);
    console.log('resetUnit', resetUnit);
    VMdispatch({ type: 'setRestUnit', value: resetUnit });
  }, [changesUnits, totalBalance]);

  useEffect(() => {
    divideBalance();
  }, [totalBalance]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

VMcontext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VMcontext;
