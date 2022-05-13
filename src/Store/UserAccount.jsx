import React from 'react';

import {useAccount} from '../Hooks/Account';

export const UserAccount = React.createContext(null);

const accountReducer = (state, action) => {
  switch (action.type) {
    case 'insert':
      return {
        currentMoney: state.currentMoney - action.incomeMoney,
        insertedMoney: state.insertedMoney + action.incomeMoney,
      };

    case 'refund':
      return {
        currentMoney: state.currentMoney + state.insertedMoney,
        insertedMoney: 0,
      };

    case 'buy':
      return {
        currentMoney: state.currentMoney,
        insertedMoney: state.insertedMoney - action.incomeMoney,
      };

    default:
      throw new Error(`잘못된 액션 입력입니다. ${action.type}`);
  }
};

export const UserAccountContext = props => {
  const {insertMoney, refundMoney, buyProduct, userMoney} = useAccount(
    {
      currentMoney: 36450,
      insertedMoney: 0,
    },
    accountReducer,
  );

  return (
    <UserAccount.Provider
      value={{
        insertMoney,
        refundMoney,
        buyProduct,
        userMoney,
      }}
    >
      {props.children}
    </UserAccount.Provider>
  );
};
