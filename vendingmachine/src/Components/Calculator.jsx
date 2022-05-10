import { useContext } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { CalculatorText } from '../styled-components/util';
import { myContext } from './App';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: ${({ theme }) => theme.padding.large};
`;

const PriceInfo = styled.div`
  width: 90%;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  text-align: right;
  border-radius: 1rem;
`;

const Price = styled(CalculatorText)`
  margin-right: ${({ theme }) => theme.margin.large};
  cursor: default;
`;

const Change = styled(CalculatorText)`
  display: block;
  width: 90%;
  height: 6rem;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.margin.xLarge};
  background-color: transparent;
  padding: 0;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  border: none;

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

const MessageList = styled.ul`
  width: 90%;
  height: 45rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  margin-top: ${({ theme }) => theme.margin.xLarge};
  border-radius: 1rem;
  overflow-y: auto;
`;

export default Calculator;
