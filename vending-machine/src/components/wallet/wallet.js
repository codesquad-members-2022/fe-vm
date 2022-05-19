import { walletData } from '../../db/data';
import { useEffect, useState } from 'react';
import { StyledWalletContainer } from './wallet.styled';
import { CoinWindow } from './coinWindow/coinWindow';

export function Wallet() {
  const [walletInfo, setWalletInfo] = useState([]);

  useEffect(() => {
    setWalletInfo(walletData);
  });
  return (
    <StyledWalletContainer>
      <CoinWindow walletInfo={walletInfo}></CoinWindow>
      {/*<myMoneyMonitor></myMoneyMonitor>*/}
    </StyledWalletContainer>
  );
}
