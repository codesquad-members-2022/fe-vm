import MoneyItem from "components/Wallet/MoneyItem/MoneyItem";
import cash from "mockData/money";
import styled from "styled-components";

const Wallet = () => {
  const currentMoney = Object.entries(cash);

  return (
    <Wrapper>
      {currentMoney.map(([money, count]) => (
        <MoneyItem cash={money} count={count} key={money} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 11rem;
  height: 100%;
  padding: 1rem;

  margin: 0 auto;
  border: 2px solid #000;
`;

export default Wallet;
