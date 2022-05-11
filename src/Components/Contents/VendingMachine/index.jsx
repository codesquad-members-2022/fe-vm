import styled from 'styled-components';
import DATA from './data';
import { ContentBox } from '../style';
import ProductList from './ProductList';
import MachineRight from './MachineRight';

export default function VendingMachine() {
  return (
    <MachineContents>
      <ProductList products={DATA} />
      <MachineRight />
    </MachineContents>
  );
}

const MachineContents = styled(ContentBox)`
  display: grid;
  grid-template-columns: 1fr 380px;
  grid-gap: 20px;
`;
