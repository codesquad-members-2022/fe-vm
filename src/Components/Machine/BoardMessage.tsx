import styled from 'styled-components';
import { useMessageState } from '@/Context/MessageContext';

const MessageWrapper = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  overflow-y: auto;
`;

const Message = styled.p`
  padding: 10px;
`;

export default function StackMessage(): JSX.Element {
  const messageState = useMessageState();

  return (
    <>
      <MessageWrapper>
        <>
          {messageState.map((message, index) => {
            return <Message key={index}>{message.message}</Message>;
          })}
        </>
      </MessageWrapper>
    </>
  );
}
