import { SetAlertMessage } from "Context/AlertMessageProvider";
import { OrderInProgressContext, SetOrderInProgressContext } from "Context/OrderInProgressProvider";
import { DRINK_API, INIT_ALERT_MESSAGE, INVESTMENT_API, INVESTMENT_COUNT_TIME } from "Helper/constant";
import { delay, fetchData, getAPIById } from "Helper/utils";
import useInvestment from "Hooks/useInvestment";
import useInvestmentTimer from "Hooks/useInvestmentTimer";
import { useContext, useEffect } from "react";
import { BeverageContainer, Price, Title } from "./Beverage.styled";

export default function Beverage(props) {
  const { title, price, id, stock, beverages, setBeverages } = props.props;
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
      const orderProps = { setOrderInProgress, setInvestment, investment, setAlertMessage, price, title };
      const stockProps = { beverages, setBeverages, id };

      reflectOrder(orderProps);
      reflectStockChange(stockProps);
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
      stock={stock}
      onClick={() => {
        if (!stock) {
          alertSoldOut(setAlertMessage);
          return;
        }
        handleOrder(handleOrderProps);
      }}
    >
      <Title flex justify="center" align="center">
        {title}
      </Title>
      <Price flex justify="center" align="center">
        {stock ? price : "품절"}
      </Price>
    </BeverageContainer>
  );
}

const reflectStockChange = (props) => {
  const { beverages, setBeverages, id } = props;
  const idx = id - 1;
  beverages[idx].stock -= 1;
  const api = getAPIById(DRINK_API, id);
  const newBeverages = [...beverages];
  setBeverages(newBeverages);
  fetchData(api, { method: "PUT", bodyData: beverages[idx] });
};

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

const alertSoldOut = (setAlertMessage) => {
  const alertMessage = { ...INIT_ALERT_MESSAGE };
  alertMessage.soldOut = true;
  setAlertMessage(alertMessage);
};
