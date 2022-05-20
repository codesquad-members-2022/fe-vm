import React, { useContext } from 'react';
import { Container, MoneyList } from 'pages/Wallet.style';
import { WalletContext, WalletSetContext } from 'contexts/WalletProvider';
import MoneyItem from 'components/wallet/MoneyItem';
import AmountWrap from 'components/wallet/AmountWrap';

export default function Wallet() {
  const [walletState, setWalletState] = [useContext(WalletContext), useContext(WalletSetContext)];

  const decreaseQuantity = id => {
    const newWalletState = walletState.map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
    setWalletState(newWalletState);
  };

  return (
    <Container>
      <MoneyList>
        {walletState.map(info => (
          <MoneyItem key={info.id} info={info} coin={info.unit < 1000} decreaseQuantity={decreaseQuantity} />
        ))}
      </MoneyList>
      <AmountWrap />
    </Container>
  );
}
