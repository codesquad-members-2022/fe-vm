import React from 'react';

import PropTypes from 'prop-types';

import Button, { BUTTON_THEME, BUTTON_SIZE } from '@components/atoms/Button';
import * as S from '@components/molecules/ProductBox/ProductBox.style';
import { formatPrice } from '@lib/utils';

const SOLD_OUT = '품절';

const ProductBox = ({ emoji, name, price, quantity, changeProductQuantity }) => {
  // TODO: 현재 투입된 금액이 상품 가격보다 적을 때 disabled 처리 추가;
  const disabled = quantity === 0;

  const isSoldOut = quantity === 0;

  return (
    <S.Container>
      <S.Emoji>{emoji}</S.Emoji>
      <S.Name>{name}</S.Name>
      <Button
        theme={BUTTON_THEME.ROUNDED}
        size={BUTTON_SIZE.MEDIUM}
        disabled={disabled}
        onClick={changeProductQuantity}
      >
        {isSoldOut ? SOLD_OUT : formatPrice(price)}
      </Button>
    </S.Container>
  );
};

ProductBox.propTypes = {
  emoji: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  changeProductQuantity: PropTypes.func,
};

export default ProductBox;
