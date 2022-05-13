import styled from 'styled-components';
import ItemList from '@/Components/Machine/ItemList';
import InfoList from '@/Components/Machine/InfoList';

const MachineWrapper = styled.section`
  ${({ theme }) => theme.mixins.flexBox('row', 'stretch', 'start')};
`;

export default function Machine(): JSX.Element {
  return (
    <>
      <MachineWrapper>
        <ItemList />
        <InfoList />
      </MachineWrapper>
    </>
  );
}
