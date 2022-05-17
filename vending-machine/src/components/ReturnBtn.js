import React, { useContext } from "react";
import styled from "styled-components";
import { messageContext } from "../contexts/messageContext";
import { WalletContext } from "../contexts/walletContext";

function ReturnBtn() {
  const setInputMoneySum = useContext(WalletContext).value.setInputMoneySum;
  const setMessage = useContext(messageContext).setMessage;
  function returnInputMoney() {
    setInputMoneySum(0);
  }
  return (
    <ReturnBtnWrap>
      <ReturnMoneyBtn
        onClick={() => {
          returnInputMoney();
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
