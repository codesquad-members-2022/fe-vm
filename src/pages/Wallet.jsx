import React, { useContext } from 'react';

import WalletItemList from '../components/WalletItemList';
import TotalMoney from '../components/TotalMoney';
import { MoneyContext } from '../context/MoneyProvider';
import { PriceContext } from '../context/PriceProvider';

export default function Wallet() {
  const { moneyState, decreaseMoney } = useContext(MoneyContext);
  const { setInputPrice, updatePrice, remainMoney, setRemainMoney } =
    useContext(PriceContext);

  const handleClickWon = (won, num) => {
    if (num < 1) {
      window.alert('돈이 부족합니다.');
      return;
    }

    decreaseMoney(won);
    setInputPrice(won);
    updatePrice(won);
    setRemainMoney(remainMoney + won);
  };

  return (
    <>
      <WalletItemList moneyInfo={moneyState} onClickWon={handleClickWon} />
      <TotalMoney moneyInfo={moneyState} />
    </>
  );
}
