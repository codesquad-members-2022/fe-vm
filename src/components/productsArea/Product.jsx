import React from 'react';
import PropTypes from 'prop-types';
import { ProductBtn, Detail, Price } from 'components/productsArea/Product.style';

export default function Product({ detail, price, quantity }) {
  return (
    <ProductBtn quantity={quantity} disabled={!(quantity > 0)}>
      <Detail>{detail}</Detail>
      <Price>{price.toLocaleString('en')}</Price>
    </ProductBtn>
  );
}

Product.propTypes = {
  detail: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number
};

Product.defaultProps = {
  detail: '',
  price: 0,
  quantity: 0
};
