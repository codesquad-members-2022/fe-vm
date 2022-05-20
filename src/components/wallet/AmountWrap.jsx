import React from 'react';
import { Container, Amount } from 'components/wallet/AmountWrap.style';
import walletData from 'data/wallet';
import { addCommasToNumber } from 'utils/util';

export default function AmountWrap() {
  const getAmout = () => {
    const amount = walletData.reduce((acc, { unit, quantity }) => acc + unit * quantity, 0);
    return addCommasToNumber(amount);
  };

  return (
    <Container>
      총<Amount>{getAmout()}</Amount>원
    </Container>
  );
}
