import styled from "styled-components";

const MoneyUnit = () => {
  return (
    <MoneyUnitContainer>
      <MoneyType>10원</MoneyType>
      <MoneyNum>1개</MoneyNum>
    </MoneyUnitContainer>
  );
};

const MoneyUnitContainer = styled.div`
  display: flex;
`;

const MoneyType = styled.div`
  border: 0.3rem solid black;
  width: 80px;
  padding: 1.5rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  margin: 0 1rem 1rem 0;
`;

const MoneyNum = styled.div`
  border: 0.3rem solid black;
  width: 80px;
  padding: 1.5rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export default MoneyUnit;
