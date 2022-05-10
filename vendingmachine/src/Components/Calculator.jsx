import { useContext } from 'react';
import styled from 'styled-components';
import Message from './Message';
import {
  FlexCenter,
  CalculatorText,
  boxShadowBorderRadi,
} from '../styled-components/util';
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

const Container = styled(FlexCenter)`
  flex-direction: column;
  width: 60%;
  padding: ${({ theme }) => theme.padding.large};
`;

const PriceInfo = styled.div`
  width: 90%;
  height: 6rem;
  text-align: right;
  ${boxShadowBorderRadi}
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
  border: none;
  ${boxShadowBorderRadi}

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

const MessageList = styled.ul`
  width: 90%;
  height: 45rem;
  margin-top: ${({ theme }) => theme.margin.xLarge};
  overflow-y: auto;
  ${boxShadowBorderRadi}
`;

export default Calculator;
