import VendingMachineController from 'components/organisms/VendingMachineController/VendingMachineController';
import Wallet from 'components/organisms/Wallet/Wallet';
import * as Styled from 'pages/Wallet/WalletPage.style';

const WalletPage = () => {
  return (
    <Styled.WalletPage>
      <Styled.WalletPageWrapper>
        <Wallet />
        <VendingMachineController />
      </Styled.WalletPageWrapper>
    </Styled.WalletPage>
  );
};

export default WalletPage;
