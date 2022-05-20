import React from 'react';
import PropTypes from 'prop-types';
import { Container, Amount } from 'components/wallet/AmountWrap.style';

export default function AmountWrap({ amount }) {
  return (
    <Container>
      총<Amount>{amount}</Amount>원
    </Container>
  );
}

AmountWrap.propTypes = {
  amount: PropTypes.string
};

AmountWrap.defaultProps = {
  amount: ''
};
