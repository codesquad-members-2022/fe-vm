import { initAlertMessage } from 'Helper/constant';
import { getWonTemplate } from 'Helper/utils';
import { AlertMessage, SetAlertMessage } from 'Pages/VendingMachine';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Message, Screen, ScreenContainer } from './MessageScreen.styled';

export default function MessageScreen() {
  const alertMessage = useContext(AlertMessage);
  const setAlertMessage = useContext(SetAlertMessage);
  const [messageList, setMessageList] = useState([]);

  const createNewMessageList = useCallback(
    (message) => {
      const newMessageList = [...messageList, message];
      return newMessageList;
    },
    [messageList],
  );

  useEffect(() => {
    const message = Object.entries(alertMessage).reduce(getAlertMessage, '');
    if (!message) {
      return;
    }

    const newMessageList = createNewMessageList(message);
    setMessageList(newMessageList);
    setAlertMessage(initAlertMessage);
  }, [alertMessage, setAlertMessage, createNewMessageList]);

  return (
    <ScreenContainer>
      <Screen>
        {messageList &&
          messageList.map((message, idx) => <Message key={createArrayKeyForNoHasID(message, idx)}>{message}</Message>)}
      </Screen>
    </ScreenContainer>
  );
}

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

const createArrayKeyForNoHasID = (message, key) => {
  return `${message + key}`;
};
