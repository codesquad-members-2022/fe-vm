/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { Container, MoneyInput, Unit } from 'components/orderArea/MoneySlot.style';
import { PaymentContext } from 'pages/VendingMachine';

const MAX_PAYMENT = 100000;

export default function MoneySlot() {
  const [payment, setPayment] = useContext(PaymentContext);

  const isRightPayMent = inputValue => {
    if (isNaN(inputValue)) return false;
    if (inputValue >= MAX_PAYMENT) return false;
    return true;
  };

  const handleChangeMoneyInput = ({ target }) => {
    const inputValue = target.value;
    const numPayMent = parseFloat(inputValue.replace(/[,]/gim, ''));
    if (!inputValue) setPayment(0);
    if (isRightPayMent(numPayMent)) setPayment(numPayMent);
  };

  return (
    <Container>
      <MoneyInput type="text" value={payment ? payment.toLocaleString('en') : ''} onChange={handleChangeMoneyInput} />
      <Unit>원</Unit>
    </Container>
  );
}
