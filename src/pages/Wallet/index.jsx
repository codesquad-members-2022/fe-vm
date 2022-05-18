import VendingMachineInfo from '@components/organisms/VendingMachineInfo';
import WalletInfo from '@components/organisms/WalletInfo';
import * as S from '@pages/Wallet/Wallet.style';

const Wallet = () => {
  return (
    <S.Container>
      <VendingMachineInfo />
      <WalletInfo />
    </S.Container>
  );
};

export default Wallet;
