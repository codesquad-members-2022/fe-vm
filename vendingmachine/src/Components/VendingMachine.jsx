import styled from 'styled-components';
import Menu from './Menu';
import Calculator from './Calculator';
import { Container } from '../styled-components/util';

const VendingMachine = ({ menuInfo, messageInfo, handleClickChange }) => {
  return (
    <VendingMachineContainer>
      <Menu menuInfo={menuInfo} />
      <Calculator
        messageInfo={messageInfo}
        handleClickChange={handleClickChange}
      />
    </VendingMachineContainer>
  );
};

const VendingMachineContainer = styled(Container)`
  width: 1440px;
  display: flex;
  margin-top: ${({ theme }) => theme.margin.large};
`;

export default VendingMachine;
