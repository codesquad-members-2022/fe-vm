import React, { useContext } from "react";
import { StyledWallet, WalletDetail, TotalAmout, CoinPrice, CoinCount } from "./Wallet.styled";
import { addComma } from "utils";
import { LogContext, WalletContext } from "../../App.js";

function Wallet() {
  const { logs, setLogs } = useContext(LogContext);
  const { walletMoney, setWalletMoney } = useContext(WalletContext);

  const getTotalAmout = () => {
    const totalAmout = walletMoney.reduce(function (acc, cur) {
      return acc + cur.price * cur.quantity;
    }, 0);

    return totalAmout;
  };

  // TODO: 로그 추가하는 함수가 Information 컴포넌트 함수와 동일함, 개선하기
  const addInsertLog = (money) => {
    const newLog = { idx: logs.length + 1, type: "insert", data: money + "원이 투입됨" };
    setLogs([...logs, newLog]);
  };

  const insertMoney = (price) => {
    const editedWalletMoney = walletMoney.map((coin) => {
      if (coin.price === price && coin.quantity > 0) {
        return { ...coin, quantity: coin.quantity - 1 };
      }
      return coin;
    });

    setWalletMoney(editedWalletMoney);
    addInsertLog(price);
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
