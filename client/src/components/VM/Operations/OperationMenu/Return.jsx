import React, { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "store/InputStore";
import { MessageContext } from "store/MessageStore";
import { WalletContext } from "store/WalletStore";

export default function Return() {
  const inputContext = useContext(InputContext);
  const { input, setInput } = inputContext;
  const messageContext = useContext(MessageContext);
  const { setMessage } = messageContext;
  const walletContext = useContext(WalletContext);
  const { wallet, setWallet } = walletContext;

  return (
    <StyledReturn
      onClick={() => {
        if (input <= 0) return;
        //원본의 불변성을 지켜야할지 렌더링을 줄여야할지
        //pipe 만들기??
        setWallet(getAddedWallet(wallet, getAddedMoney(input)));
        setInput(0);
        setMessage((prev) => [...prev, `잔돈 ${input}원이 반환되었습니다 \n`]);
      }}
    >
      반환
    </StyledReturn>
  );
}

const StyledReturn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 60px;
  margin: 25px 0;
  border: 1px solid black;
  font-size: 25px;
  font-weight: bold;
  background-color: lightgray;
`;

function getAddedMoney(inputMoney) {
  let total = inputMoney;
  const units = [10000, 5000, 1000, 500, 100, 50, 10];
  const addedMoney = [];

  units.forEach((unit) => {
    const quotient = (total / unit) >> 0;
    const remainder = total % unit;
    if (quotient >= 1) {
      addedMoney.push([unit, quotient]);
      total = remainder;
    }
  });

  return addedMoney;
}

function getAddedWallet(wallet, moneyArr) {
  const newWallet = { ...wallet };
  moneyArr.forEach(([unit, count]) => {
    newWallet[unit] += count;
  });
  return newWallet;
}
