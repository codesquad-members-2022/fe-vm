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
    const newArr = [...value];
    inputMoneyArr.map((currency) => {
      const valueIdx = newArr.findIndex((el) => el.title === currency.title);
      if (currency.amount <= value[valueIdx].amount) {
        newArr[valueIdx].amount -= currency.amount;
      } else {
        newArr[valueIdx].amount = 0;
        newArr[valueIdx + 1].amount -= 1;
      }
    });
    setSum(budget - input);
    setInputMoneySum(input);
    setWalletMoney(newArr);
  }

  function submitValue(e) {
    if (e.key === "Enter") {
      if (!checkInput(e.target.value)) {
        e.target.value = null;
      } else {
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
      }
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
