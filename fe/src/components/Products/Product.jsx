import React from 'react';
import PropTypes from 'prop-types';
import { setKoreanLocaleMoney } from 'utils';
import * as S from './style';

function Product({ productInfo, isPriceUnderInsertMoney }) {
  const { product_name: productName, type, price, ea } = productInfo;
  return (
    <S.ProductCard type={type} canBuy={isPriceUnderInsertMoney(price)}>
      <h5>{productName}</h5>
      <span>{setKoreanLocaleMoney(price)}원</span>
    </S.ProductCard>
  );
}

Product.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ea: PropTypes.number.isRequired,
  }).isRequired,
  isPriceUnderInsertMoney: PropTypes.func.isRequired,
};

export default Product;
