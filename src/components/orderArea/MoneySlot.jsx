/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, MoneyInput, Unit } from 'components/orderArea/MoneySlot.style';
import { FinalPayContext } from 'pages/VendingMachine';

const MAX_PAYMENT = 100000;

export default function MoneySlot({ useInputPayState, canOrderState }) {
  const [inputPay, setInputPay] = useInputPayState;
  const finalPay = useContext(FinalPayContext)[0];

  const isRightPayMent = inputValue => {
    if (inputValue && isNaN(inputValue)) return false;
    if (inputValue > MAX_PAYMENT) return false;
    return true;
  };

  const handleChangeMoneyInput = ({ target }) => {
    const inputValue = target.value;
    const numPay = parseFloat(inputValue.replace(/[,]/gim, ''));

    if (isRightPayMent(numPay)) setInputPay(numPay);
  };

  useEffect(() => setInputPay(0), [finalPay]);

  return (
    <Container>
      <MoneyInput
        type="text"
        value={inputPay > 0 ? inputPay.toLocaleString('en') : ''}
        onChange={handleChangeMoneyInput}
        readOnly={!canOrderState}
      />
      <Unit>원</Unit>
    </Container>
  );
}

MoneySlot.propTypes = {
  useInputPayState: PropTypes.arrayOf(PropTypes.number, PropTypes.func),
  canOrderState: PropTypes.bool
};

MoneySlot.defaultProps = {
  useInputPayState: [],
  canOrderState: true
};
