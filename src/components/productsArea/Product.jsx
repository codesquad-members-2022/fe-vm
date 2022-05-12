import React from 'react';
import PropTypes from 'prop-types';
import { ProductBtn, Detail, Price } from 'components/productsArea/Product.style';

export default function Product({ detail, price, quantity, disabled }) {
  return (
    <ProductBtn quantity={quantity} disabled={disabled}>
      <Detail>{detail}</Detail>
      <Price>{price.toLocaleString('en')}</Price>
    </ProductBtn>
  );
}

Product.propTypes = {
  detail: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  disabled: PropTypes.bool
};

Product.defaultProps = {
  detail: '',
  price: 0,
  quantity: 0,
  disabled: false
};
