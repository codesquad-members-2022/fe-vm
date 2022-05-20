import React from 'react';
import PropTypes from 'prop-types';
import { Container, MoneyBtn, MoneyQuantity } from 'components/wallet/MoneyItem.style';
import { addCommasToNumber } from 'utils/util';

export default function QuantityBtnWrap({ info, coin, decreaseQuantity }) {
  return (
    <Container>
      <MoneyBtn color={info.color} coin={coin} onClick={() => decreaseQuantity(info.id)} disabled={info.quantity <= 0}>
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
    color: PropTypes.string
  }),
  coin: PropTypes.bool,
  decreaseQuantity: PropTypes.func
};

QuantityBtnWrap.defaultProps = {
  info: {
    id: null,
    unit: 0,
    quantity: 0,
    color: '#fff'
  },
  coin: false,
  decreaseQuantity: () => {}
};
