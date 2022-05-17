import React, { useState } from "react";
import { walletItem } from "data";
import { StyledWallet, WalletDetail, TotalAmout, CoinPrice, CoinCount } from "./Wallet.styled";
import { addComma } from "utils";

function Wallet() {
  const [walletMoney, setWalletMoney] = useState(walletItem);

  const getTotalAmout = () => {
    const totalAmout = walletMoney.reduce(function (acc, cur) {
      return acc + cur.price * cur.quantity;
    }, 0);

    return totalAmout;
  };

  const insertMoney = (price) => {
    const editedWalletMoney = walletMoney.map((coin) => {
      if (coin.price === price) {
        return { ...coin, quantity: coin.quantity - 1 };
      }
      return coin;
    });

    setWalletMoney(editedWalletMoney);
  };

  return (
    <StyledWallet>
      <WalletDetail>
        {walletMoney.map(({ id, price }) => (
          <CoinPrice key={"coin-price-" + id} onClick={() => insertMoney(price)}>
            {addComma(price)}원
          </CoinPrice>
        ))}
        {walletMoney.map(({ id, quantity }) => (
          <CoinCount key={"coin-quantity-" + id}>{quantity}개</CoinCount>
        ))}
      </WalletDetail>
      <TotalAmout>{addComma(getTotalAmout())}원</TotalAmout>
    </StyledWallet>
  );
}

export { Wallet };
