import styled from 'styled-components';
import { useMachineState } from '@/Context/MachineContext';

const MessageWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

const Message = styled.p`
  padding: 10px;
`;

export default function StackMessage(): JSX.Element {
  const machineState = useMachineState();

  return (
    <>
      <MessageWrapper>
        <>
          {machineState.map(machine => {
            return <Message>{machine.message}</Message>;
          })}
        </>
      </MessageWrapper>
    </>
  );
}
