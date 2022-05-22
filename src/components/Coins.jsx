import React from 'react';
import Coin from 'components/Coin';

function Coins({ coins, curWalletMoney, setCurWalletMoney }) {
  return coins.map((coin) => (
    <Coin
      key={`${coin.AMOUNT}`}
      coin={coin}
      curWalletMoney={curWalletMoney}
      setCurWalletMoney={setCurWalletMoney}
    />
  ));
}

export default Coins;
