import React, { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "../../../../store/InputStore";
import { MessageContext } from "../../../../store/MessageStore";
import { WalletContext } from "../../../../store/WalletStore";

export default function MoneyAmount({ amount, unit }) {
  const inputContext = useContext(InputContext);
  const { input, setInput } = inputContext;
  const messageContext = useContext(MessageContext);
  const { setMessage } = messageContext;
  const walletContext = useContext(WalletContext);
  const { setWallet } = walletContext;

  const moneyAmountClickHandler = (amount, unit) => {
    {
      if (amount > 0) {
        setWallet((prev) => {
          const newWallet = { ...prev };
          newWallet[unit] -= 1;
          return newWallet;
        });
        setInput(input + Number(unit));
        setMessage((prev) => [...prev, `${unit}원이 투입되었습니다`]);
      }
    }
  };

  return (
    <StyledMoneyAmount onClick={() => moneyAmountClickHandler(amount, unit)}>
      {amount}
    </StyledMoneyAmount>
  );
}

const StyledMoneyAmount = styled.div`
  display: flex;
  width: 110px;
  height: 80px;
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
  background-color: lightgray;
`;
