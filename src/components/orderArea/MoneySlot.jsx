/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, MoneyInput, Unit } from 'components/orderArea/MoneySlot.style';
import { addCommasToNumber } from 'utils/util';
import { FinalPayContext } from 'Context/FinalPayProvider';

export default function MoneySlot({ inputPay, updateInputPay, resetInputPay }) {
  const finalPay = useContext(FinalPayContext);

  const handleChangeMoneyInput = ({ target }) => updateInputPay(target.value);

  useEffect(() => resetInputPay(0), [finalPay]);

  return (
    <Container>
      <MoneyInput
        type="text"
        value={inputPay > 0 ? addCommasToNumber(inputPay) : ''}
        onChange={handleChangeMoneyInput}
      />
      <Unit>원</Unit>
    </Container>
  );
}

MoneySlot.propTypes = {
  inputPay: PropTypes.number,
  updateInputPay: PropTypes.func,
  resetInputPay: PropTypes.func
};

MoneySlot.defaultProps = {
  inputPay: 0,
  updateInputPay: () => {},
  resetInputPay: () => {}
};
