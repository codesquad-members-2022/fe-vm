import styled from 'styled-components';
import ItemList from '@/Components/Machine/ItemList';
import InfoList from '@/Components/Machine/InfoList';

interface TimerType {
  timerId: React.MutableRefObject<number>;
}

const MachineWrapper = styled.section`
  ${({ theme }) => theme.mixins.flexBox('row', 'stretch', 'start')};
`;

export default function Machine({ timerId }: TimerType): JSX.Element {
  return (
    <>
      <MachineWrapper>
        <ItemList timerId={timerId} />
        <InfoList />
      </MachineWrapper>
    </>
  );
}
