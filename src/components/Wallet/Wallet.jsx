import React from "react";
import { walletItem } from "data";
import { StyledWallet, WalletDetail, TotalAmout, CoinPrice, CoinCount } from "./Wallet.styled";

function Wallet() {
  const getTotalAmout = (wallet) => {
    const totalAmout = walletItem.reduce(function (acc, cur) {
      return acc + cur.price * cur.quantity;
    }, 0);

    return totalAmout;
  };

  return (
    <StyledWallet>
      <WalletDetail>
        {walletItem.map(({ id, price, quantity }) => (
          <>
            <CoinPrice key={id}>{price}원</CoinPrice>
            <CoinCount key={id}>{quantity}개</CoinCount>
          </>
        ))}
      </WalletDetail>
      <TotalAmout>{getTotalAmout(walletItem)}원</TotalAmout>
    </StyledWallet>
  );
}

export { Wallet };
