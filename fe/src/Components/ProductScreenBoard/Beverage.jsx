import { InvestmentContext } from "Context/InvestmentProvider";
import { OrderInProgressContext, SetOrderInProgressContext } from "Context/OrderInProgressProvider";
import { INVESTMENT_COUNT_TIME, ORDER_DELAY } from "Helper/constant";
import { delay } from "Helper/utils";
import useInvestmentTimer from "Hooks/useInvestmentTimer";
import useRunOrder from "Hooks/useRunOrder";
import useSetAlertMessage from "Hooks/useSetAlertMessage";
import { useContext, useEffect } from "react";
import { BeverageContainer, Price, Title } from "./Beverage.styled";

export default function Beverage(props) {
  const { title, price, id, stock, beverages, setBeverages } = props.props;
  const investment = useContext(InvestmentContext);
  const resetInvestment = useInvestmentTimer();
  const investmentPrice = (investment && investment.amount) || 0;
  const [orderInProgress, setOrderInProgress] = [
    useContext(OrderInProgressContext),
    useContext(SetOrderInProgressContext),
  ];
  const runOrder = useRunOrder();
  const applyAlertMessage = useSetAlertMessage();

  const isBuyPossible = orderInProgress ? false : price <= investmentPrice;
  const handleOrderProps = {
    orderInProgress,
    isBuyPossible,
    applyAlertMessage,
    setOrderInProgress,
    id,
    resetInvestment,
  };

  useEffect(() => {
    const startOrderProcess = async () => {
      if (!orderInProgress) {
        return;
      }

      await delay(ORDER_DELAY);
      const runOrderProps = { price, title, beverages, setBeverages, id };
      runOrder(runOrderProps);
    };

    if (id !== orderInProgress) {
      return;
    }

    startOrderProcess();
  }, [orderInProgress, investment]);

  return (
    <BeverageContainer
      id={id}
      orderInProgress={orderInProgress}
      isBuyPossible={isBuyPossible}
      stock={stock}
      onClick={() => {
        if (!stock) {
          applyAlertMessage("soldOut");
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

const handleOrder = (props) => {
  const { orderInProgress, isBuyPossible, applyAlertMessage, setOrderInProgress, id, resetInvestment } =
    props;
  if (orderInProgress) {
    applyAlertMessage("buying");
    return;
  }
  if (!isBuyPossible) {
    applyAlertMessage("wrong");
    return;
  }
  resetInvestment(INVESTMENT_COUNT_TIME);
  setOrderInProgress(id);
};
