import React, { useContext } from 'react';
import { Container, MoneyList } from 'pages/Wallet.style';
import { WalletContext } from 'contexts/WalletProvider';
import MoneyItem from 'components/wallet/MoneyItem';
import AmountWrap from 'components/wallet/AmountWrap';

export default function Wallet() {
  const walletState = useContext(WalletContext);

  return (
    <Container>
      <MoneyList>
        {walletState.map(info => (
          <MoneyItem key={info.id} info={info} coin={info.unit < 1000} />
        ))}
      </MoneyList>
      <AmountWrap />
    </Container>
  );
}
