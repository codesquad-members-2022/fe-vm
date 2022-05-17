import React, { useContext } from 'react';

import WalletItemList from '../components/WalletItemList';
import TotalMoney from '../components/TotalMoney';
import { MoneyContext } from '../context/MoneyProvider';
import { PriceContext } from '../context/PriceProvider';

export default function Wallet() {
  const { moneyState, decreaseMoney } = useContext(MoneyContext);
  const { insertInput } = useContext(PriceContext);

  const handleClickMoney = (currentMoney, num) => {
    if (num < 1) {
      window.alert('돈이 부족합니다.');
      return;
    }

    decreaseMoney(currentMoney);
    insertInput({ currentMoney, msg: `${currentMoney}원이 투입되었습니다.` });
  };

  return (
    <>
      <WalletItemList moneyInfo={moneyState} onClickMoney={handleClickMoney} />
      <TotalMoney moneyInfo={moneyState} />
    </>
  );
}
