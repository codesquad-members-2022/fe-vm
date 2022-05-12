import React from "react";
import styled from "styled-components";
import Money from "./Money/Money";

export default function MoneyContainer({ keys, moneyDB, total, setTotal }) {
  const moneyList = keys.map((key, index) => (
    <Money
      key={index}
      unit={key}
      amount={moneyDB[key]}
      total={total}
      setTotal={setTotal}
    />
  ));

  return <StyledMoneyContainer>{moneyList}</StyledMoneyContainer>;
}

const StyledMoneyContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 600px;
  border: 1px solid black;
  margin: 0 auto;
`;
