import React, { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "store/InputStore";
import { MessageContext } from "store/MessageStore";
import { WalletContext } from "store/WalletStore";
import { getNeededMoney } from "utils/util";
import { moneyUnitArr } from "constants/constants";

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
        //TODO: pipe 함수 만들어보기
        setWallet(getAddedWallet(wallet, getNeededMoney(input, moneyUnitArr)));
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

export function getAddedWallet(wallet, moneyArr) {
  const newWallet = { ...wallet };
  moneyArr.forEach(([unit, count]) => {
    newWallet[unit] += count;
  });
  return newWallet;
}
