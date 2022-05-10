import styled from "styled-components";
import MoneyUnit from "./MoneyUnit";

const MoneyUnits = () => {
  return (
    <MoneyUnitsContainer>
      <MoneyUnit />
      <MoneyUnit />
      <MoneyUnit />
      <MoneyUnit />
      <MoneyUnit />
      <MoneyUnit />
      <MoneyUnit />
      <MoneyUnit />
      <MoneySum>23,550원</MoneySum>
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
