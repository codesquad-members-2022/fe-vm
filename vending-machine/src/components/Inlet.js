import React, { useContext } from "react";
import styled from "styled-components";
import { WalletContext } from "../contexts/walletContext";
import { HeightSort } from "../style/Globalstyles";
import { devideInputMoney } from "../util/util";
function Inlet() {
  const { walletMoney, setWalletMoney, _, setInputMoneySum } =
    useContext(WalletContext).value;
  const budget = useContext(WalletContext).sum;
  const setSum = useContext(WalletContext).setSum;

  function checkInput(text) {
    if (isNaN(text)) {
      alert("유효한 입력값이 아닙니다 다시 입력해 주세요");
      return false;
    } else {
      return true;
    }
  }
  function isSmaller(num1, num2) {
    return num1 <= num2;
  }
  function decreaseWallet(inputMoneyArr, value, input) {
    let newInput = input;
    const newArr = value.map((el) => {
      return { ...el };
    });
    inputMoneyArr.map((currency) => {
      const valueIdx = newArr.findIndex((el) => el.title === currency.title);
      if (currency.amount <= value[valueIdx].amount) {
        newArr[valueIdx].amount -= currency.amount;
      } else {
        const biggerCurrencyIdx = newArr.findIndex(
          (el, idx) => idx > valueIdx && el.amount !== 0
        );
        console.log(newArr[biggerCurrencyIdx]);
        if (biggerCurrencyIdx === -1) {
          const moneyinHandArr = value
            .map((el) => {
              return { ...el };
            })
            .filter((currency) => currency.amount !== 0)
            .reverse();
          let [sum, i] = [0, 0];
          while (sum < newInput) {
            sum += moneyinHandArr[i].amount * moneyinHandArr[i].title;
            newArr[
              newArr.findIndex((el) => el.title === moneyinHandArr[i].title)
            ].amount = 0;
            i++;
          }
          newInput = sum;
        } else {
          newInput =
            input -
            currency.amount * currency.title +
            newArr[biggerCurrencyIdx].amount * newArr[biggerCurrencyIdx].title;
        }
      }
    });
    setSum(budget - input);
    setInputMoneySum(newInput);
    setWalletMoney(newArr);
    return newInput;
  }

  function submitValue(e) {
    if (e.key === "Enter") {
      if (checkInput(e.target.value)) {
      }
      const roundedInput = Math.round(Number(e.target.value) / 10) * 10;
      e.target.value = roundedInput;
      const isPayable = isSmaller(roundedInput, budget);
      if (isPayable) {
        const inputMoney = devideInputMoney(roundedInput).reverse();
        decreaseWallet(inputMoney, walletMoney, roundedInput);
        e.target.value = null;
      } else {
        alert("한도초과!");
      }
      e.target.value = null;
    }
  }

  return (
    <InletWrap>
      <InletInputWrap>
        <InletInput onKeyPress={submitValue}></InletInput>
      </InletInputWrap>
    </InletWrap>
  );
}
const InletWrap = styled.div`
  width: 100%;
  height: 70px;
  ${HeightSort};
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 5%;
  gap: 10px;
`;
const InletInputWrap = styled.div`
  width: 30%;
  height: 100%;
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
`;
const InletInput = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;

export default Inlet;
