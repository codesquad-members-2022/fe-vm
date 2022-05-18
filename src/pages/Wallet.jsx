import React, { useState, useContext } from 'react';

import WalletItemList from '../components/WalletItemList';
import TotalMoney from '../components/TotalMoney';
import { MoneyContext } from '../context/MoneyProvider';

export default function Wallet() {
  const makeInitialMoneyInfo = (totalPrice) => {
    const moneyTypes = [10000, 5000, 1000, 500, 100, 50, 10];
    let money = totalPrice;
    const initialMoneyInfo = moneyTypes.map((type) => {
      const num = Math.floor(money / type);
      money %= type;
      return {
        type,
        num,
      };
    });

    initialMoneyInfo.reverse();

    return initialMoneyInfo;
  };

  const { inputPrice, setInputPrice, totalPrice, setTotalPrice } =
    useContext(MoneyContext);
  const [moneyInfos, setMoneyInfos] = useState(
    makeInitialMoneyInfo(totalPrice)
  );

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

    const decresedMoney = type * 1;
    setTotalPrice(totalPrice - decresedMoney);
  };

  const handleClickMoney = (currentMoney, num) => {
    if (num < 1) {
      window.alert('돈이 부족합니다.');
      return;
    }

    decreaseMoney(currentMoney);
    setInputPrice([...inputPrice, Number(currentMoney)]);
  };

  return (
    <>
      <WalletItemList moneyInfos={moneyInfos} onClickMoney={handleClickMoney} />
      <TotalMoney totalPrice={totalPrice} />
    </>
  );
}
