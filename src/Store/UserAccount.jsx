import React, {useEffect, useState} from 'react';

export const UserAccount = React.createContext(null);

const sinkState = accountState => currentState => {
  accountState.currentMoney = currentState.currentMoney;
  accountState.insertedMoney = currentState.insertedMoney;
  accountState.history = currentState.history;
};

export const UserAccountContext = ({children, currentPage}) => {
  const [account, setAccount] = useState({
    currentMoney: 36450,
    insertedMoney: 0,
    history: [],
  });

  const sinkedAccount = sinkState(account);

  useEffect(() => {
    setAccount(account);
  }, [currentPage]);
  return (
    <UserAccount.Provider
      value={{
        account,
        sinkedAccount,
      }}
    >
      {children}
    </UserAccount.Provider>
  );
};
