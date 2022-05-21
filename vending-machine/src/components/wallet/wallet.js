import { useContext } from 'react';
import { StyledWalletContainer } from './wallet.styled';
import { CoinWindow } from './coinWindow/coinWindow';
import { MyMoneyMonitor } from './myMoneyMonitor/myMoneyMonitor';
import { WalletContext } from '../../context/walletProvider';

export function Wallet() {
  const { walletInfo } = useContext(WalletContext);

  return (
    <StyledWalletContainer>
      <CoinWindow walletInfo={walletInfo} />
      <MyMoneyMonitor walletInfo={walletInfo} />
    </StyledWalletContainer>
  );
}
