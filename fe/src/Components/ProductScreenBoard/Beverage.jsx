import { SetAlertMessage } from "App";
import { INIT_ALERT_MESSAGE } from "Helper/constant";
import useInvestment from "Hooks/useInvestment";
import { useContext } from "react";
import { BeverageContainer, Price, Title } from "./Beverage.styled";

export default function Beverage({ title, price }) {
  const [investment, setInvestment] = useInvestment();
  const setAlertMessage = useContext(SetAlertMessage);

  const investmentPrice = (investment && investment.amount) || 0;
  const buyPossible = price <= investmentPrice;

  const handleOrder = () => {
    if (!buyPossible) {
      alertWrongProduct(setAlertMessage);
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
  const alertMessage = { ...INIT_ALERT_MESSAGE };
  alertMessage.orderTitle = title;
  setAlertMessage(alertMessage);
};

const alertWrongProduct = (setAlertMessage) => {
  const alertMessage = { ...INIT_ALERT_MESSAGE };
  alertMessage.wrong = true;
  setAlertMessage(alertMessage);
};
