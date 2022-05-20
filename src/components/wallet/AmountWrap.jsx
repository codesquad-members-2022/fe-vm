import React from 'react';
import { Container, Amount } from 'components/wallet/AmountWrap.style';
import useWalletState from 'hooks/useWalletState';

export default function AmountWrap() {
  const { getAmount } = useWalletState();
  return (
    <Container>
      총<Amount>{getAmount()}</Amount>원
    </Container>
  );
}
