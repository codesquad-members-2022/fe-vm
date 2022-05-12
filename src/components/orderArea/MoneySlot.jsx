/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Container, MoneyInput, Unit } from 'components/orderArea/MoneySlot.style';

export default function MoneySlot() {
  const [payment, setPayMent] = useState('');

  const isRightPayMent = inputValue => {
    if (inputValue[0] === '0') return false;
    if (isNaN(inputValue[inputValue.length - 1])) return false;
    if (inputValue.length > 6) return false;
    return true;
  };

  const handleChangeMoneyInput = ({ target }) => {
    const inputValue = target.value;
    const numPayMent = Number(inputValue.replace(/[,]/gim, ''));
    if (isRightPayMent(inputValue)) setPayMent(numPayMent);
  };

  useEffect(() => {}, [payment]);

  return (
    <Container>
      <MoneyInput type="text" value={payment.toLocaleString('en')} onChange={handleChangeMoneyInput} />
      <Unit>원</Unit>
    </Container>
  );
}
