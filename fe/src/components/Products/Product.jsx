import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { setKoreanLocaleMoney } from 'utils';
import * as S from './style';

function Product({ productInfo, isSelect, isPriceUnderInsertMoney, handleSelectProduct }) {
  const { product_name: productName, type, price, ea } = productInfo;
  return (
    <S.ProductCard
      type={type}
      isSelect={isSelect}
      canBuy={isPriceUnderInsertMoney(price)}
      onClick={() => handleSelectProduct(productInfo)}
    >
      <h5>{productName}</h5>
      <span>{setKoreanLocaleMoney(price)}원</span>
      <span>{ea}개</span>
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
  isSelect: PropTypes.bool.isRequired,
  isPriceUnderInsertMoney: PropTypes.func.isRequired,
  handleSelectProduct: PropTypes.func.isRequired,
};

export default memo(Product);
