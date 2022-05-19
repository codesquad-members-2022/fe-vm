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

  const decreaseWalletMoney = (currentMoneyType) => {
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

  const findTargetMoneyInfo = (price, infos) => {
    let money = price;
    infos.reverse();
    return infos.map(({ type }) => {
      const num = Math.floor(money / type);
      money %= type;
      return {
        type,
        num,
      };
    });
  };

  const updateMoneyInfo = ({ targetInfos, isPlus }) => {
    const newInfos = moneyInfos.map((info, index) => {
      const { type, num } = targetInfos[index];
      if (info.type === type && num > 0) {
        return {
          type,
          num: isPlus ? info.num + num : info.num - num,
        };
      }

      return { type: info.type, num: info.num };
    });

    return newInfos;
  };

  const decreaseWalletMoneyByInput = (price) => {
    const targetInfos = findTargetMoneyInfo(price, moneyInfos);
    const newMoneyInfos = updateMoneyInfo({ targetInfos, isPlus: false });
    newMoneyInfos.reverse();

    return newMoneyInfos;
  };

  const addRefund2MoneyInfo = (price) => {
    const refundMoneyInfo = findTargetMoneyInfo(price, moneyInfos);

    const newMoneyInfos = updateMoneyInfo({
      targetInfos: refundMoneyInfo,
      isPlus: true,
    });
    newMoneyInfos.reverse();

    return newMoneyInfos;
  };

  const value = useMemo(
    () => ({
      inputPrice,
      setInputPrice,
      moneyInfos,
      setMoneyInfos,
      decreaseWalletMoney,
      decreaseWalletMoneyByInput,
      addRefund2MoneyInfo,
    }),
    [
      inputPrice,
      setInputPrice,
      moneyInfos,
      setMoneyInfos,
      decreaseWalletMoney,
      decreaseWalletMoneyByInput,
      addRefund2MoneyInfo,
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
