import styled from "styled-components";
import { makePriceFormat } from "../../util/makePriceFormat";

const MoneyUnit = ({ type, num }) => {
  return (
    <MoneyUnitContainer>
      <MoneyType>{makePriceFormat(type)}</MoneyType>
      <MoneyNum>{num}개</MoneyNum>
    </MoneyUnitContainer>
  );
};

const MoneyUnitContainer = styled.div`
  display: flex;
  font-size: 2rem;
`;

const MoneyType = styled.div`
  border: 0.3rem solid black;
  width: 130px;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  margin: 0 1rem 1rem 0;
`;

const MoneyNum = styled.div`
  border: 0.3rem solid black;
  width: 130px;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export default MoneyUnit;
