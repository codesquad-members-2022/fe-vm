import Wallet from 'components/organisms/Wallet';
import * as Styled from 'pages/Wallet/WalletPage.style';
import VendingMachineController from 'components/organisms/VendingMachineController';

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
