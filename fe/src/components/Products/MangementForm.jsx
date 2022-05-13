/* eslint-disable react/require-default-props */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { changeNumberToKoreanLocaleMoney } from 'utils';
import { Button } from '@mui/material';
import * as S from './style';

// TODO: 모달로 바꾸기

function MangementForm({ targetProduct, fetchAddTargetProduct, fetchSubstractTargetProduct }) {
  if (!targetProduct) {
    return <S.MangementForm>선택된 상품이 없어요. </S.MangementForm>;
  }
  const { product_name: productName, type, price, ea, id } = targetProduct;
  return (
    <S.MangementForm>
      <h5>{productName}</h5>
      <span>{changeNumberToKoreanLocaleMoney(price)}원</span>
      <Button variant="contained" onClick={() => fetchAddTargetProduct(id)}>
        +
      </Button>
      <span>{ea}개</span>
      <Button variant="contained" onClick={() => fetchSubstractTargetProduct(id)}>
        -
      </Button>
    </S.MangementForm>
  );
}

MangementForm.propTypes = {
  targetProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ea: PropTypes.number.isRequired,
  }),
  fetchAddTargetProduct: PropTypes.func.isRequired,
  fetchSubstractTargetProduct: PropTypes.func.isRequired,
};

export default memo(MangementForm);
