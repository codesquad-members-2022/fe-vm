import styled from 'styled-components';
import Message from './Message';

const Calculator = () => {
  return (
    <Container>
      <PriceInfo>
        <Price>500원</Price>
      </PriceInfo>
      <Change>반환</Change>
      <MessageList>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </MessageList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: ${({ theme }) => theme.padding.large};
`;

const PriceInfo = styled.div`
  width: 90%;
  height: 6rem;
  border: 0.3rem solid ${({ theme }) => theme.color.black};
  text-align: right;
  border-radius: 1rem;
`;

const Price = styled.strong`
  line-height: ${({ theme }) => theme.lineHeight.large};
  font-size: ${({ theme }) => theme.fontSize.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-right: ${({ theme }) => theme.margin.large};
`;

const Change = styled.button`
  display: block;
  width: 90%;
  height: 6rem;
  background-color: none;
  cursor: pointer;
  border: 0.3rem solid ${({ theme }) => theme.color.black};
  margin-top: ${({ theme }) => theme.margin.xLarge};
  font-size: ${({ theme }) => theme.fontSize.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: transparent;
  line-height: ${({ theme }) => theme.lineHeight.large};
  padding: 0;
  border-radius: 1rem;
`;

const MessageList = styled.ul`
  width: 90%;
  height: 50rem;
  border: 0.3rem solid ${({ theme }) => theme.color.black};
  margin-top: ${({ theme }) => theme.margin.xLarge};
  border-radius: 1rem;
  overflow-y: auto;
`;

export default Calculator;
