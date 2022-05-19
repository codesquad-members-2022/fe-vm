import React, { useContext } from 'react';

import WalletItemList from '../components/WalletItemList';
import TotalMoney from '../components/TotalMoney';
import { MoneyContext } from '../context/MoneyProvider';

export default function Wallet() {
  const { inputPrice, setInputPrice, moneyInfos, decreaseWalletMoney } =
    useContext(MoneyContext);

  const handleClickMoney = (currentMoney, num) => {
    if (num < 1) {
      window.alert('돈이 부족합니다.');
      return;
    }

    decreaseWalletMoney(currentMoney);
    setInputPrice([...inputPrice, Number(currentMoney)]);
  };

  return (
    <>
      <WalletItemList moneyInfos={moneyInfos} onClickMoney={handleClickMoney} />
      <TotalMoney moneyInfos={moneyInfos} />
    </>
  );
}
