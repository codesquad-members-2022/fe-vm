/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, MoneyInput, Unit } from 'components/orderArea/MoneySlot.style';

const MAX_PAYMENT = 100000;

export default function MoneySlot({ useInputPayState }) {
  const [inputPay, setInputPay] = useInputPayState;

  const isRightPayMent = inputValue => {
    if (isNaN(inputValue)) return false;
    if (inputValue >= MAX_PAYMENT) return false;
    return true;
  };

  const handleChangeMoneyInput = ({ target }) => {
    const inputValue = target.value;
    const numPay = parseFloat(inputValue.replace(/[,]/gim, ''));
    if (!inputValue) setInputPay(0);
    if (isRightPayMent(numPay)) setInputPay(numPay);
  };

  return (
    <Container>
      <MoneyInput type="text" value={inputPay ? inputPay.toLocaleString('en') : ''} onChange={handleChangeMoneyInput} />
      <Unit>원</Unit>
    </Container>
  );
}

MoneySlot.propTypes = {
  useInputPayState: PropTypes.arrayOf(PropTypes.number, PropTypes.func)
};

MoneySlot.defaultProps = {
  useInputPayState: []
};
