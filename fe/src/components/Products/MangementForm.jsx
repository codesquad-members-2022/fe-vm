import React, { memo, useCallback } from 'react';
import { changeNumberToKoreanLocaleMoney } from 'utils/global';
import { Button } from '@mui/material';
import { addTargetProduct, substractTargetProduct } from 'context/Product/action';
import { useProductContext } from 'context/Product';
import { useErrorHandler } from 'react-error-boundary';
import productApi from 'api/product';
import * as S from './style';

function MangementForm() {
  const { targetProduct, productDispatch } = useProductContext();
  const handleError = useErrorHandler();
  const fetchAddTargetProduct = useCallback(
    id => {
      productApi
        .addTargetProduct(id)
        .then(response => addTargetProduct(productDispatch, response.data), handleError);
    },
    [handleError, productDispatch],
  );

  const fetchSubstractTargetProduct = useCallback(
    id => {
      productApi
        .substractTargetProduct(id)
        .then(response => substractTargetProduct(productDispatch, response.data), handleError);
    },
    [handleError, productDispatch],
  );

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

export default memo(MangementForm);
