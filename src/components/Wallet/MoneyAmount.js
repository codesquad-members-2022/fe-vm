import styled from "styled-components";

export default function MoneyAmount({ value, amount }) {
  return (
    <MoneyAmountWrapper>
      <MoneyButton disabled={amount === 0}>{value.toLocaleString()}원</MoneyButton>
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
