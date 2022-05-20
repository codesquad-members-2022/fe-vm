import { useContext } from "react";
import { MoneyContext } from "../../context/MoneyContext";
import { MessageContext } from "../../context/MessageContext";
import { useState } from "react";
import "./walletInfo.css";

const WalletPrice = ({ price, amount }) => {
  const [moneyAmount, setMoneyAmount] = useState(amount);
  const { accumulatedPrice, setAccumulatedPrice } = useContext(MoneyContext);
  const { setMessage } = useContext(MessageContext);

  const rechargeMoney = (event) => {
    setAccumulatedPrice(
      convertTypeNum(event.target.innerText) + accumulatedPrice
    );
    checkWalletAmount();
    insertMessage(event.target.innerText);
  };

  const convertTypeNum = (convertTypeNum) => {
    let walletPrice = convertTypeNum;
    walletPrice = walletPrice.slice(0, -1);
    return Number(walletPrice);
  };

  const checkWalletAmount = () => {
    if (moneyAmount === 0) {
      setAccumulatedPrice(accumulatedPrice);
      return;
    }
    setMoneyAmount((moneyAmount) => moneyAmount - 1);
  };

  const insertMessage = (product) => {
    const newMessage = {
      content: product + "원 충전",
    };
    setMessage((prev) => [newMessage.content, ...prev]);
  };

  return (
    <>
      <div className="walletprice-wrapper" onClick={rechargeMoney}>
        {price}원
      </div>
      <div className="walletprice-wrapper">{moneyAmount}개</div>
    </>
  );
};

export default WalletPrice;
