import styled from "styled-components";
import icons from "styles/icons";

const Money = ({ moneyType, amount, putMoneyIntoVendingMachine }) => {
  return (
    <MoneyWrapper>
      <MoneyButton moneyType={moneyType} onClick={() => putMoneyIntoVendingMachine(moneyType)} />
      <MoneyCounter>
        <img src={icons.MULTIPLY} alt="multiply" />
        <span>{amount}</span>
      </MoneyCounter>
    </MoneyWrapper>
  );
};

const MoneyWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

const MoneyButton = styled.div`
  width: 140px;
  height: 70px;
  background: ${({ moneyType }) => `url(${icons.MONEY_IMG[moneyType]})`}
    no-repeat center;
  background-size: contain;
`;

const MoneyCounter = styled.div`
  img {
    height: 25px;
    width: 25px;
    object-fit: cover;
    margin: 0 30px;
  }

  span {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export default Money;
