import VendingMachine from 'components/organisms/VendingMachine/VendingMachine';
import VendingMachineController from 'components/organisms/VendingMachineController/VendingMachineController';
import * as Styled from 'pages/VendingMachine/VMPage.style';

const VMPage = () => {
  return (
    <Styled.VMPage>
      <Styled.VMPageWrapper>
        <VendingMachine />
        <VendingMachineController />
      </Styled.VMPageWrapper>
    </Styled.VMPage>
  );
};

export default VMPage;
