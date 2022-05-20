import React from 'react';
import PropTypes from 'prop-types';
import { Container, MoneyBtn, MoneyQuantity } from 'components/wallet/MoneyItem.style';
import { addCommasToNumber } from 'utils/util';

export default function QuantityBtnWrap({ info }) {
  return (
    <Container>
      <MoneyBtn color={info.color} coin={info.coin}>
        {addCommasToNumber(info.unit)}
      </MoneyBtn>
      <MoneyQuantity>{info.quantity}</MoneyQuantity>
    </Container>
  );
}

QuantityBtnWrap.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    unit: PropTypes.number,
    quantity: PropTypes.number,
    color: PropTypes.string,
    coin: PropTypes.bool
  })
};

QuantityBtnWrap.defaultProps = {
  info: {
    id: null,
    unit: 0,
    quantity: 0,
    color: '#fff',
    coin: false
  }
};
