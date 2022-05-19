import VendingMachineInfo from '@components/organisms/VendingMachineInfo';
import WalletInfo from '@components/organisms/WalletInfo';
import { walletApi } from '@lib/api';
import useAsync from '@lib/hooks/useAsync';
import * as S from '@pages/Wallet/Wallet.style';

const Wallet = () => {
  const [state, refetch] = useAsync(walletApi.getAllMoney);

  // TODO: loading, error 처리
  const { data: wallet } = state;

  const changeMoneyQuantity = id => () => {
    const money = wallet.find(product => product.id === id);
    walletApi
      .reduceMoneyQuantity({ id, data: { quantity: money.quantity - 1 } })
      .then(() => refetch());
  };

  return (
    <S.Container>
      <VendingMachineInfo />
      {wallet && <WalletInfo wallet={wallet} changeMoneyQuantity={changeMoneyQuantity} />}
    </S.Container>
  );
};

export default Wallet;
