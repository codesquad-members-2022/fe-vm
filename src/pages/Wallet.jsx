import React, { useContext } from 'react';

import WalletItemList from '../components/WalletItemList';
import TotalMoney from '../components/TotalMoney';
import { MoneyContext } from '../context/MoneyProvider';
import { PriceContext } from '../context/PriceProvider';

export default function Wallet() {
  const { moneyState, decreaseMoney } = useContext(MoneyContext);
  const { setInputPrice, updatePrice, remainMoney, setRemainMoney } =
    useContext(PriceContext);

  const handleClickMoney = (currentMoney, num) => {
    if (num < 1) {
      window.alert('돈이 부족합니다.');
      return;
    }

    decreaseMoney(currentMoney);
    setInputPrice(currentMoney);
    updatePrice(currentMoney);
    setRemainMoney(remainMoney + currentMoney);
  };

  return (
    <>
      <WalletItemList moneyInfo={moneyState} onClickMoney={handleClickMoney} />
      <TotalMoney moneyInfo={moneyState} />
    </>
  );
}
