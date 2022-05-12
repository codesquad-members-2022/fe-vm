/* eslint-disable no-restricted-globals */
import React from 'react';
import { Container, MoneyInput, Unit } from 'components/orderArea/MoneySlot.style';

export default function MoneySlot() {
  return (
    <Container>
      <MoneyInput type="text" />
      <Unit>원</Unit>
    </Container>
  );
}
