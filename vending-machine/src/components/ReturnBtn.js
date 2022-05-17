import React, { useContext } from "react";
import styled from "styled-components";
import { messageContext } from "../contexts/messageContext";
import { WalletContext } from "../contexts/walletContext";

function ReturnBtn() {
  const setInputMoneySum = useContext(WalletContext).value.setInputMoneySum;
  const inputMoneySum = useContext(WalletContext).value.inputMoneySum;
  const sum = useContext(WalletContext).sum;
  const setSum = useContext(WalletContext).setSum;
  const setMessage = useContext(messageContext).setMessage;
  function returnInputMoney() {
    setSum(sum + inputMoneySum);
    setInputMoneySum(0);
  }
  function makeReturnMessage() {
    setMessage(`잔돈이 반환됨`);
  }
  return (
    <ReturnBtnWrap>
      <ReturnMoneyBtn
        onClick={() => {
          returnInputMoney();
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
