import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MoneyContainer from "./MoneyContainer/MoneyContainer";
import Total from "./Total/Total";
import { calculateTotal } from "../../utils/util";
import axios from "axios";

export default function Wallet() {
  const keys = Object.keys(moneyDB);
  const [total, setTotal] = useState(calculateTotal(keys, moneyDB));

  return (
    <StyledWallet>
      <MoneyContainer
        keys={keys}
        moneyDB={moneyDB}
        total={total}
        setTotal={setTotal}
      />
      <Total total={total} />
    </StyledWallet>
  );
}

const StyledWallet = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 750px;
  border: 5px solid black;
  margin: auto;
  padding: 20px;
`;

const moneyDB = {
  10: 0,
  50: 3,
  100: 8,
  500: 3,
  1000: 4,
  5000: 1,
  10000: 1,
};
