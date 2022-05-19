import { VendingMachineContainer } from 'components/VendingMachine.Styled';
import Menu from 'components/Menu';
import Calculator from 'components/Calculator';

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

export default VendingMachine;
