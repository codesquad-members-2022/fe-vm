import React, {useEffect, useState} from 'react';

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

export const UserAccountContext = ({children, currentPage}) => {
  // const {insertMoney, refundMoney, buyProduct, userMoney} = useAccount(
  //   {
  //     currentMoney: 36450,
  //     insertedMoney: 0,
  //     history: [],
  //   },
  //   accountReducer,
  // );

  const [account, setAccount] = useState({
    currentMoney: 36450,
    insertedMoney: 0,
    history: [],
  });

  useEffect(() => {
    console.log('바뀜');
  }, [currentPage]);
  return (
    <UserAccount.Provider
      value={{
        // insertMoney,
        // refundMoney,
        // buyProduct,
        // userMoney,
        account,
      }}
    >
      {children}
    </UserAccount.Provider>
  );
};
