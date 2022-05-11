import React, {useState, useReducer} from 'react';

export const UserAccount = React.createContext(null);

const currentMoneyReducer = (state, action) => {
  switch (action.type) {
    case 'decrease':
      return state - action.income;
    default:
      throw new Error(`UserAccount 잘못된 액션입력입니다.${action.type}`);
  }
};

export const UserAccountContext = props => {
  const [currentMoney, dispatchCurrentMoney] = useReducer(
    currentMoneyReducer,
    35650,
  );
  const [insertedMoney, setInsertedMoney] = useState(0);
  return (
    <UserAccount.Provider
      value={{
        currentMoney,
        insertedMoney,
        setInsertedMoney,
        dispatchCurrentMoney,
      }}
    >
      {props.children}
    </UserAccount.Provider>
  );
};
