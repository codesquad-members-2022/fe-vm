/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const MoneyContext = React.createContext();

export default function MoneyProvider({ children }) {
  const initialMoneyInfos = [
    { type: 10, num: 0 },
    { type: 50, num: 1 },
    { type: 100, num: 5 },
    { type: 500, num: 5 },
    { type: 1000, num: 2 },
    { type: 5000, num: 2 },
    { type: 10000, num: 1 },
  ];

  const [inputPrice, setInputPrice] = useState([]);
  const [moneyInfos, setMoneyInfos] = useState(initialMoneyInfos);

  const decreaseMoney = (currentMoneyType) => {
    const targetMoney = moneyInfos.find(
      ({ type }) => type === currentMoneyType
    );
    const filteredMoney = moneyInfos.filter(
      ({ type }) => type !== currentMoneyType
    );

    const { type } = targetMoney;
    const num = targetMoney.num - 1;
    setMoneyInfos(
      [...filteredMoney, { type, num }].sort(
        (aMoney, bMoney) => aMoney.type - bMoney.type
      )
    );
  };

  const value = useMemo(
    () => ({
      inputPrice,
      setInputPrice,
      moneyInfos,
      setMoneyInfos,
      decreaseMoney,
    }),
    [inputPrice, setInputPrice, moneyInfos, setMoneyInfos, decreaseMoney]
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
