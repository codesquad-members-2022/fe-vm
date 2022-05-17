import { getWonTemplate } from "./utils";

export default function addMessageList({ messageList, setMessageList, alertMessage }) {
  const message = Object.entries(alertMessage).reduce(getAlertMessage, "");
  if (!message) {
    return;
  }

  const newMessageList = createNewMessageList({ messageList, message });
  setMessageList(newMessageList);
}

const createNewMessageList = ({ messageList, message }) => {
  const newMessageList = [...messageList, message];
  return newMessageList;
};

const getAlertMessage = (message, [alertName, alertAmount]) => {
  if (!alertAmount) {
    return message;
  }
  return generateMessage(alertName, alertAmount);
};

const generateMessage = (alertName, alertAmount) => {
  const alerts = {
    chargeCash: generateInvestmentMessage,
    changeAmount: generateChangeMessage,
    orderTitle: generateOrderMessage,
    wrong: generateWrongMessage,
  };
  return alerts[alertName](alertAmount);
};

const generateOrderMessage = (title) => {
  return `${title}가 주문되었습니다.`;
};

const generateChangeMessage = (amount) => {
  return `거스름돈 ${getWonTemplate(amount)}이 반환되었습니다.`;
};

const generateInvestmentMessage = (amount) => {
  return `자판기에 ${getWonTemplate(amount)}이 투입되었습니다.`;
};

const generateWrongMessage = () => {
  return `주문할 수 없는 상품입니다.`;
};
