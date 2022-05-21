import { SetAlertMessage } from "Context/AlertMessageProvider";
import { OrderInProgressContext, SetOrderInProgressContext } from "Context/OrderInProgressProvider";
import { DRINK_API, INIT_ALERT_MESSAGE, INVESTMENT_API } from "Helper/constant";
import { fetchData, getAPIById } from "Helper/utils";
import { useContext } from "react";
import useInvestment from "./useInvestment";

export default function useRunOrder() {
  const setOrderInProgress = useContext(SetOrderInProgressContext);
  const [investment, setInvestment] = useInvestment();
  const setAlertMessage = useContext(SetAlertMessage);
  const orderInProgress = useContext(OrderInProgressContext);

  const runOrder = ({ price, title, beverages, setBeverages, id }) => {
    if (orderInProgress !== id) {
      return;
    }

    setOrderInProgress(false);

    const orderProps = { setOrderInProgress, setInvestment, investment, setAlertMessage, price, title };
    const stockProps = { beverages, setBeverages, id };
    reflectOrder(orderProps);
    reflectStockChange(stockProps);
  };
  return runOrder;
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
  const { setInvestment, investment, setAlertMessage, price, title } = props;
  investment.amount -= price;
  const newInvestment = { ...investment };
  setInvestment(newInvestment);
  fetchData(INVESTMENT_API, { method: "PUT", bodyData: newInvestment });
  alertOrderMessage({ title, setAlertMessage });
};

const alertOrderMessage = ({ title, setAlertMessage }) => {
  const alertMessage = { ...INIT_ALERT_MESSAGE };
  alertMessage.orderTitle = title;
  setAlertMessage(alertMessage);
};
