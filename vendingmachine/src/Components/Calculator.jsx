import { useContext } from 'react';
import Message from 'components/Message';
import { myContext } from 'components/App';
import {
  Container,
  PriceInfo,
  Price,
  Change,
  MessageList,
} from 'components/Calculator.Styled';

const Calculator = ({ messageInfo, handleClickChange }) => {
  const { inputMoney } = useContext(myContext);

  return (
    <Container>
      <PriceInfo>
        <Price as="strong">{inputMoney.toLocaleString()}원</Price>
      </PriceInfo>
      <Change as="button" onClick={handleClickChange}>
        반환
      </Change>
      <MessageList>
        {messageInfo &&
          messageInfo.message.map((message, index) => (
            <Message text={message} key={index} />
          ))}
      </MessageList>
    </Container>
  );
};

export default Calculator;
