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

export const CountProvider = (props) => {
  const [countState, countDispatch] = useReducer(reducer, initState);
  return (
    <CountContext.Provider value={(countState, countDispatch)}>
      {props.children}
    </CountContext.Provider>
  );
};
