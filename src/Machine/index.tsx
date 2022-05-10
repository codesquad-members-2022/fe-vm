import styled from 'styled-components';
import ItemList from './ItemList';
import ActionComponentList from './ActionComponentList';

const MachineWrapper = styled.section`
  display: flex;
  height: 700px;
`;

export default function Machine(): JSX.Element {
  return (
    <>
      <MachineWrapper>
        <ItemList />
        <ActionComponentList />
      </MachineWrapper>
    </>
  );
}
