import styled from 'styled-components';
import ItemList from '@/Components/Machine/ItemList';
import InfoList from '@/Components/Machine/InfoList';

const MachineWrapper = styled.section`
  display: flex;
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
