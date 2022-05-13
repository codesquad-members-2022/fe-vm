import { useContext } from "react";
import styled from "styled-components";
import { InputAmountContext } from "../../contexts/InputAmount";
import { LogContext } from "../../contexts/Log";
import { WalletContext } from "../../contexts/WalletContext";

export default function ReturnButton() {
  const { inputAmount, subtractInputAmount } = useContext(InputAmountContext);
  const { log } = useContext(LogContext);
  const { putMoneyToWallet } = useContext(WalletContext);
  function returnInputAmount() {
    subtractInputAmount(inputAmount);
    putMoneyToWallet(inputAmount);
    log("return", inputAmount);
  }
  return <ReturnButtonWrapper onClick={returnInputAmount}>반환</ReturnButtonWrapper>;
}

const ReturnButtonWrapper = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 2px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.baeMint};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 500;
`;
