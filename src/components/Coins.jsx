import React from 'react';
import Coin from 'components/Coin';

function Coins({ coins, curWalletMoney, setCurWalletMoney, handleCoinCount }) {
  return coins.map((coin, idx) => (
    <Coin
      key={`${coin.AMOUNT}`}
      coin={coin}
      coinIdx={idx}
      curWalletMoney={curWalletMoney}
      setCurWalletMoney={setCurWalletMoney}
      handleCoinCount={handleCoinCount}
    />
  ));
}

export default Coins;
