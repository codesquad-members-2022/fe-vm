/* eslint-disable react/require-default-props */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const MoneyContext = React.createContext();

export default function MoneyProvider({ children }) {
  const money = [
    { won: 10, num: 0 },
    { won: 50, num: 1 },
    { won: 100, num: 5 },
    { won: 500, num: 5 },
    { won: 1000, num: 2 },
    { won: 5000, num: 2 },
    { won: 10000, num: 1 },
  ];

  const [moneyState, setMoneyState] = useState(money);

  const decreaseMoney = (targetWon) => {
    const targetMoney = moneyState.find(({ won }) => won === targetWon);
    const filteredMoney = moneyState.filter(({ won }) => won !== targetWon);

    setMoneyState(
      [
        ...filteredMoney,
        { won: targetMoney.won, num: targetMoney.num - 1 },
      ].sort((aMoney, bMoney) => aMoney.won - bMoney.won)
    );
  };

  const value = useMemo(
    () => ({
      moneyState,
      decreaseMoney,
    }),
    [moneyState, decreaseMoney]
  );

  return (
    <MoneyContext.Provider value={value}>{children}</MoneyContext.Provider>
  );
}

MoneyProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
