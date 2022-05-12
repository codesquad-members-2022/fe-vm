import { useContext } from "react";
import styled from "styled-components";
import { InputAmountContext } from "../../contexts/InputAmount";
import { WalletContext } from "../../contexts/WalletContext";

export default function MoneyAmount({ value, amount }) {
  const { subtractMoney } = useContext(WalletContext);
  const { addInputAmount } = useContext(InputAmountContext);
  function insertMoneyToVM() {
    subtractMoney(value, 1);
    addInputAmount(value);
  }
  return (
    <MoneyAmountWrapper>
      <MoneyButton onClick={insertMoneyToVM} disabled={amount === 0}>
        {value.toLocaleString()}원
      </MoneyButton>
      <Amount>X {amount}</Amount>
    </MoneyAmountWrapper>
  );
}

const MoneyAmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;
const MoneyButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  font-size: 20px;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.baeMint};
  cursor: pointer;
  :disabled {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;
const Amount = styled.div`
  width: 50px;
  font-size: 20px;
  line-height: 50px;
`;
