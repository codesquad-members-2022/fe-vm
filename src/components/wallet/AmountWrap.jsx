import React, { useContext } from 'react';
import { Container, Amount } from 'components/wallet/AmountWrap.style';
import { WalletSetContext } from 'contexts/WalletProvider';

export default function AmountWrap() {
  const { getAmount } = useContext(WalletSetContext);
  return (
    <Container>
      총<Amount>{getAmount()}</Amount>원
    </Container>
  );
}
