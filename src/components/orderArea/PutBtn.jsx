import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/orderArea/PutBtn.style';

export default function PutBtn({ usePaymentState }) {
  const [payment, setPayment] = usePaymentState;

  const handlePutBtnClick = () => {};

  return <Button onClick={handlePutBtnClick}>투입</Button>;
}

PutBtn.propTypes = {
  usePaymentState: PropTypes.arrayOf(PropTypes.number, PropTypes.func)
};

PutBtn.defaultProps = {
  usePaymentState: []
};
