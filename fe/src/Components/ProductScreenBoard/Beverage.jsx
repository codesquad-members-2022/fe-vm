import { SetAlertMessage } from "Context/AlertMessageProvider";
import { OrderInProgressContext, SetOrderInProgressContext } from "Context/OrderInProgressProvider";
import { INIT_ALERT_MESSAGE, INVESTMENT_API, INVESTMENT_COUNT_TIME } from "Helper/constant";
import { delay, fetchData } from "Helper/utils";
import useInvestment from "Hooks/useInvestment";
import useInvestmentTimer from "Hooks/useInvestmentTimer";
import { useCallback, useContext, useEffect } from "react";
import { BeverageContainer, Price, Title } from "./Beverage.styled";

export default function Beverage({ title, price, id }) {
  const [investment, setInvestment] = useInvestment();
  const setAlertMessage = useContext(SetAlertMessage);
  const resetInvestment = useInvestmentTimer();
  const investmentPrice = (investment && investment.amount) || 0;
  const [orderInProgress, setOrderInProgress] = [
    useContext(OrderInProgressContext),
    useContext(SetOrderInProgressContext),
  ];

  const isBuyPossible = orderInProgress ? false : price <= investmentPrice;
  const handleOrderProps = { orderInProgress, isBuyPossible, setAlertMessage, setOrderInProgress, id };

  useEffect(() => {
    const runOrder = async () => {
      if (!orderInProgress) {
        return;
      }

      resetInvestment(INVESTMENT_COUNT_TIME);
      // 주문 대기시간 1.5초
      await delay(1500);
      // 주문 대기시간동안 /wallet 페이지로 이동했다가 돌아왔다면 거스름돈 반환 딜레이를 초기화 해놨기 때문에, 다시 세팅해줌
      resetInvestment(INVESTMENT_COUNT_TIME);
      const orderProps = { setOrderInProgress, setInvestment, investment, setAlertMessage, price, title };
      reflectOrder(orderProps);
    };

    if (id !== orderInProgress) {
      return;
    }

    runOrder();
  }, [orderInProgress]);

  return (
    <BeverageContainer
      id={id}
      orderInProgress={orderInProgress}
      isBuyPossible={isBuyPossible}
      onClick={() => {
        handleOrder(handleOrderProps);
      }}
    >
      <Title flex justify="center" align="center">
        {title}
      </Title>
      <Price flex justify="center" align="center">
        {price}
      </Price>
    </BeverageContainer>
  );
}

const reflectOrder = (props) => {
  const { setOrderInProgress, setInvestment, investment, setAlertMessage, price, title } = props;
  setOrderInProgress(false);
  investment.amount -= price;
  const newInvestment = { ...investment };
  setInvestment(newInvestment);
  fetchData(INVESTMENT_API, { method: "PUT", bodyData: newInvestment });
  alertOrderMessage({ title, setAlertMessage });
};

const handleOrder = (props) => {
  const { orderInProgress, isBuyPossible, setAlertMessage, setOrderInProgress, id } = props;
  if (orderInProgress) {
    alertBuyingMessage(setAlertMessage);
    return;
  }
  if (!isBuyPossible) {
    alertWrongProduct(setAlertMessage);
    return;
  }
  setOrderInProgress(id);
};

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

const alertBuyingMessage = (setAlertMessage) => {
  const alertMessage = { ...INIT_ALERT_MESSAGE };
  alertMessage.buying = true;
  setAlertMessage(alertMessage);
};
