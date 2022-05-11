import { initAlertMessage } from 'Helper/constant';
import { InvestmentContext, SetAlertMessage, SetInvestmentContext } from 'Pages/VendingMachine';
import { useContext } from 'react';
import { BeverageContainer, Price, Title } from './Beverage.styled';

export default function Beverage({ title, price }) {
  const setInvestment = useContext(SetInvestmentContext);
  const investment = useContext(InvestmentContext);
  const setAlertMessage = useContext(SetAlertMessage);

  const investmentPrice = (investment && investment.amount) || 0;
  const buyPossible = price <= investmentPrice;

  const handleOrder = () => {
    if (!buyPossible) {
      return;
    }
    const remainMoney = investmentPrice - price;
    investment.amount = remainMoney;
    const newInvestment = { ...investment };
    setInvestment(newInvestment);
    alertOrderMessage({ title, setAlertMessage });
  };

  return (
    <BeverageContainer buyPossible={buyPossible} onClick={handleOrder}>
      <Title flex justify="center" align="center">
        {title}
      </Title>
      <Price flex justify="center" align="center">
        {price}
      </Price>
    </BeverageContainer>
  );
}

const alertOrderMessage = ({ title, setAlertMessage }) => {
  const alertMessage = { ...initAlertMessage };
  alertMessage.orderTitle = title;
  setAlertMessage(alertMessage);
};
