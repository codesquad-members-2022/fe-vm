import React, { useReducer } from 'react';

export const CountContext = React.createContext();

const initState = {
  isCounting: false,
  lastCountingTime: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_COUNTING':
      return {
        isCounting: true,
        lastCountingTime: new Date(),
      };
    case 'END_COUNTING':
      return {
        isCount: false,
        lastCountingTime: '',
      };
    default:
      return state;
  }
};

const RETURN_MS = 5000;
const CHECK_DIFF_MS = 100;

export const CountProvider = (props) => {
  const [countState, countDispatch] = useReducer(reducer, initState);

  const checkLastCounting = () => {
    if (countState.lastCountingTime === '') return false;
    const curDate = new Date();
    const isLastCounting =
      curDate - countState.lastCountingTime < RETURN_MS + CHECK_DIFF_MS &&
      curDate - countState.lastCountingTime > RETURN_MS - CHECK_DIFF_MS;
    return isLastCounting;
  };

  const createNewCounting = () => {
    countDispatch({ type: 'NEW_COUNTING' });
  };

  const closeCounting = () => {
    countDispatch({ type: 'END_COUNTING' });
  };

  const countInfo = {
    countState,
    checkLastCounting,
    createNewCounting,
    closeCounting,
  };

  return (
    <CountContext.Provider value={countInfo}>
      {props.children}
    </CountContext.Provider>
  );
};
