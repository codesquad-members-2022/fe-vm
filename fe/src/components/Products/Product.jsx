import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { changeNumberToKoreanLocaleMoney } from 'utils/global';
import { Button } from '@mui/material';
import * as S from './style';

function Product({
  productInfo,
  isManger,
  isSelect,
  isPriceUnderInputMoney,
  handleSelectProduct,
  handleOrderProduct,
}) {
  const { product_name: productName, type, price, ea, id } = productInfo;
  return (
    <S.ProductCard
      type={type}
      isSelect={isSelect}
      canBuy={isPriceUnderInputMoney(price)}
      onClick={() => handleSelectProduct(productInfo)}
    >
      <h5>{productName}</h5>
      <span>{changeNumberToKoreanLocaleMoney(price)}원</span>
      <span>{ea}개</span>
      {isSelect && !isManger && (
        <Button variant="contained" onClick={() => handleOrderProduct(id)}>
          주문하기
        </Button>
      )}
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
  isManger: PropTypes.bool.isRequired,
  isSelect: PropTypes.bool.isRequired,
  isPriceUnderInputMoney: PropTypes.func.isRequired,
  handleSelectProduct: PropTypes.func.isRequired,
  handleOrderProduct: PropTypes.func.isRequired,
};

export default memo(Product);
