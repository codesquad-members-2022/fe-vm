import styled from 'styled-components';
import ProductContainer from './ProductContainer';
import OrderContainer from './OrderContainer';

const MachineContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default function VendingMachine() {
  return (
    <MachineContainer>
      <ProductContainer />
      <OrderContainer />
    </MachineContainer>
  );
}
