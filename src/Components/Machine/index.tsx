import styled from 'styled-components';
import ItemList from '@/Components/Machine/ItemList';
import InfoList from '@/Components/Machine/InfoList';

import { ItemContextProvider } from '@/Context/ItemContext';

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
        <ItemContextProvider>
          <ItemList timerId={timerId} />
        </ItemContextProvider>
        <InfoList />
      </MachineWrapper>
    </>
  );
}
