import React, { useContext, useState } from "react";
import styled from "styled-components";
import { InputContext } from "../../../../store/InputStore";

export default function MoneyAmount({ unit, amount, total, setTotal }) {
  const [moneyAmount, setMoneyAmount] = useState(amount);
  const context = useContext(InputContext);
  const { input, setInput } = context;
  return (
    <StyledMoneyAmount
      onClick={() => {
        if (moneyAmount > 0) {
          setMoneyAmount(moneyAmount - 1);
          setTotal(total - unit);
          setInput(input + Number(unit));
        }
      }}
    >
      {moneyAmount}
    </StyledMoneyAmount>
  );
}

const StyledMoneyAmount = styled.ul`
  display: flex;
  width: 110px;
  height: 80px;
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
`;
