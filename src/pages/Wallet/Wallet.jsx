import React from "react";
import { walletItem } from "data";
import { StyledWallet, WalletDetail, TotalAmout, CoinPrice, CoinCount } from "./Wallet.styled";
import { addComma } from "utils";

function Wallet() {
  const getTotalAmout = () => {
    const totalAmout = walletItem.reduce(function (acc, cur) {
      return acc + cur.price * cur.quantity;
    }, 0);

    return totalAmout;
  };

  return (
    <StyledWallet>
      <WalletDetail>
        {walletItem.map(({ id, price }) => (
          <CoinPrice key={"coin-price-" + id}>{addComma(price)}원</CoinPrice>
        ))}
        {walletItem.map(({ id, quantity }) => (
          <CoinCount key={"coin-quantity-" + id}>{quantity}개</CoinCount>
        ))}
      </WalletDetail>
      <TotalAmout>{addComma(getTotalAmout())}원</TotalAmout>
    </StyledWallet>
  );
}

export { Wallet };
