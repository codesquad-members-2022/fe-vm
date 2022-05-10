import ProductScreenBoard from 'Components/ProductScreenBoard';
import { VendingMachineContainer } from './VendingMachine.styled';

export default function VendingMachine() {
  return (
    <VendingMachineContainer flex>
      <ProductScreenBoard />
    </VendingMachineContainer>
  );
}
