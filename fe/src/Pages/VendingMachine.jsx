import MoneyScreenBoard from 'Components/MoneyScreenBoard';
import ProductScreenBoard from 'Components/ProductScreenBoard';
import { Column, VendingMachineContainer } from './VendingMachine.styled';

export default function VendingMachine() {
  return (
        <VendingMachineContainer flex direction="column">
          <Column flex>
            <ProductScreenBoard />
            <MoneyScreenBoard />
          </Column>
    </VendingMachineContainer>
  );
}
