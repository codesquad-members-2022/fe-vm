import styled from 'styled-components';

import { COLORS, TYPOGRAPHY } from 'constants';

import ProductCards from 'components/VendingMachine/ProductCards';
import OrderForm from 'components/VendingMachine/OrderForm';
import InsertedBlance from 'components/VendingMachine/InsertedBlance';
import LogMessages from 'components/VendingMachine/LogMessages';

const VendingMachine = () => {
  return (
    <VendingMachineContainer>
      <ProductCards />
      <InsertedBlance />
      <OrderForm />
      <LogMessages />
    </VendingMachineContainer>
  );
};

const VendingMachineContainer = styled.div`
  display: grid;
  grid-template-columns: 792px 368px;
  grid-template-rows: 80px 128px 568px;
  grid-template-areas:
    'Products InsertedBlance'
    'Products OrderForm'
    'Products LogMessages';
  gap: 24px;
`;

export default VendingMachine;
