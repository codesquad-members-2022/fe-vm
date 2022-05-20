import { AlertMessage, SetAlertMessage } from "Context/AlertMessageProvider";
import { INIT_ALERT_MESSAGE } from "Helper/constant";
import { useContext } from "react";

export default function useSetAlertMessage() {
  const [alertMessage, setAlertMessage] = [useContext(AlertMessage), useContext(SetAlertMessage)];

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

  const applyAlertMessage = (message) => {
    const messageList = {
      wrong: alertWrongProduct,
      buying: alertBuyingMessage,
      soldOut: alertSoldOut,
    };
    if (!messageList.hasOwnProperty(message)) {
      return;
    }
    messageList[message](setAlertMessage);
  };

  return applyAlertMessage;
}
