import React, { useContext } from "react";
import styled from "styled-components";
import { messageContext } from "../contexts/messageContext";
import { WalletContext } from "../contexts/walletContext";

function ReturnBtn() {
  const setInputMoneySum = useContext(WalletContext).value.setInputMoneySum;
  const inputMoneySum = useContext(WalletContext).value.inputMoneySum;
  const sum = useContext(WalletContext).sum;
  const setSum = useContext(WalletContext).setSum;
  const { message, setMessage } = useContext(messageContext);
  const value = useContext(WalletContext).value;
  const setWalletMoney = useContext(WalletContext).value.setWalletMoney;

  function devideInputMoney(money) {
    const currencies = [10000, 5000, 1000, 500, 100, 50, 10];
    const inputMoneyArr = [];
    let i = 0;
    while (i < currencies.length) {
      const currency = currencies[i];
      if (money >= currency) {
        inputMoneyArr.push({
          title: currency,
          amount: parseInt(money / currency, 10),
        });
        money = money - currency * parseInt(money / currency, 10);
      }
      i++;
    }
    return inputMoneyArr;
  }

  function returnInputMoney(inputMoneyArr, value) {
    setSum(sum + inputMoneySum);
    setInputMoneySum(0);
    const newArr = [...value.walletMoney];
    value.walletMoney.map((currency) => {
      inputMoneyArr.map((walletCurrency) => {
        if (currency.title === walletCurrency.title) {
          newArr[newArr.findIndex((el) => el.title === currency.title)] = {
            title: currency.title,
            amount: walletCurrency.amount + currency.amount,
          };
        }
      });
    });
    setWalletMoney(newArr);
  }
  function makeReturnMessage() {
    setMessage([...message, "잔돈이 반환됨"]);
  }
  return (
    <ReturnBtnWrap>
      <ReturnMoneyBtn
        onClick={() => {
          returnInputMoney(devideInputMoney(inputMoneySum), value);
          makeReturnMessage();
        }}
      >
        반환
      </ReturnMoneyBtn>
    </ReturnBtnWrap>
  );
}

const ReturnBtnWrap = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  place-content: center end;
  box-sizing: border-box;
  padding: 5%;
`;
const ReturnMoneyBtn = styled.button`
  width: 100px;
  height: 50px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 15px;
  display: grid;
  place-content: center;
  font-size: 25px;
  font-weight: bolder;
`;
export default ReturnBtn;
