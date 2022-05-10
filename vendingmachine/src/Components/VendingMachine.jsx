import styled from 'styled-components';
import Menu from './Menu';
import Calculator from './Calculator';
import { Container } from '../styled-components/util';

const VendingMachine = () => {
  return (
    <VendingMachineContainer>
      <Menu />
      <Calculator />
    </VendingMachineContainer>
  );
};

const VendingMachineContainer = styled(Container)`
  width: 1440px;
  display: flex;
  margin-top: ${({ theme }) => theme.margin.large};
`;

export default VendingMachine;
