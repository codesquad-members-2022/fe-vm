import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchData from "../../util/fetchData";
import { makePriceFormat } from "../../util/makePriceFormat";
import MoneyUnit from "./MoneyUnit";

const MoneyUnits = () => {
  const [moneyState, setMoneyState] = useState([]);
  const [moneySum, setMoneySum] = useState(0);
  const setData = async () => {
    const data = await fetchData("http://localhost:4000/data");
    setMoneyState(data.money);
    setMoneySum(data.money.reduce((acc, { type, num }) => acc + type * num, 0));
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <MoneyUnitsContainer>
      {moneyState.map(({ type, num }) => {
        return <MoneyUnit type={type} num={num} />;
      })}
      <MoneySum>{makePriceFormat(moneySum)}</MoneySum>
    </MoneyUnitsContainer>
  );
};

const MoneyUnitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const MoneySum = styled.div`
  border: 0.3rem solid black;
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  font-size: 2rem;
  text-align: center;
`;

export default MoneyUnits;
