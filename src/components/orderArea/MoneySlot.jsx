/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, MoneyInput, Unit } from 'components/orderArea/MoneySlot.style';

const MAX_PAYMENT = 100000;

export default function MoneySlot({ usePaymentState }) {
  const [payment, setPayment] = usePaymentState;

  const isRightPayMent = inputValue => {
    if (isNaN(inputValue)) return false;
    if (inputValue >= MAX_PAYMENT) return false;
    return true;
  };

  const handleChangeMoneyInput = ({ target }) => {
    const inputValue = target.value;
    const numPayMent = parseFloat(inputValue.replace(/[,]/gim, ''));
    if (!inputValue) setPayment('');
    if (isRightPayMent(numPayMent)) setPayment(numPayMent);
  };

  return (
    <Container>
      <MoneyInput type="text" value={payment.toLocaleString('en')} onChange={handleChangeMoneyInput} />
      <Unit>원</Unit>
    </Container>
  );
}

MoneySlot.propTypes = {
  usePaymentState: PropTypes.arrayOf(PropTypes.number, PropTypes.func)
};

MoneySlot.defaultProps = {
  usePaymentState: []
};
