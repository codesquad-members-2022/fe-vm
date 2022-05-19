/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import useMoney from '../hooks/useMoney';
import reducer from '../reducer/redcuer';

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

  const {
    inputPrice,
    setInputPrice,
    moneyInfos,
    onDecreaseWalletMoney,
    onDecreaseWalletMoneyByInput,
    onAddRefund2MoneyInfo,
  } = useMoney({ state: initialMoneyInfos, reducer });

  const value = useMemo(
    () => ({
      inputPrice,
      setInputPrice,
      moneyInfos,
      onDecreaseWalletMoney,
      onDecreaseWalletMoneyByInput,
      onAddRefund2MoneyInfo,
    }),
    [
      inputPrice,
      setInputPrice,
      moneyInfos,
      onDecreaseWalletMoney,
      onDecreaseWalletMoneyByInput,
      onAddRefund2MoneyInfo,
    ]
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
