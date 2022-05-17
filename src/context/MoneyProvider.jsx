/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const MoneyContext = React.createContext();

export default function MoneyProvider({ children }) {
  const moneyInfo = [
    { money: 10, num: 0 },
    { money: 50, num: 1 },
    { money: 100, num: 5 },
    { money: 500, num: 5 },
    { money: 1000, num: 2 },
    { money: 5000, num: 2 },
    { money: 10000, num: 1 },
  ];

  const [moneyState, setMoneyState] = useState(moneyInfo);

  const decreaseMoney = (currentMoney) => {
    const targetMoney = moneyState.find(({ money }) => money === currentMoney);
    const filteredMoney = moneyState.filter(
      ({ money }) => money !== currentMoney
    );

    setMoneyState(
      [
        ...filteredMoney,
        { money: targetMoney.money, num: targetMoney.num - 1 },
      ].sort((aMoney, bMoney) => aMoney.money - bMoney.money)
    );
  };

  const updateMoney = (targetMoney) => {
    const reversedMoneyInfos = moneyState.slice();
    reversedMoneyInfos.reverse();

    let targetPrice = targetMoney;
    for (const info of reversedMoneyInfos) {
      const { money } = info;
      const targetNum = Math.floor(targetPrice / money);

      if (targetNum > 0) {
        info.num += targetNum;
      }
      targetPrice %= money;
    }
    reversedMoneyInfos.reverse();
    setMoneyState([...reversedMoneyInfos]);
  };

  const value = useMemo(
    () => ({
      moneyState,
      decreaseMoney,
      updateMoney,
    }),
    [moneyState, decreaseMoney, updateMoney]
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
