import React from 'react';

import PropTypes from 'prop-types';

import Button, { BUTTON_THEME, BUTTON_SIZE } from '@components/atoms/Button';
import * as S from '@components/molecules/ProductBox/ProductBox.style';
import { formatPrice } from '@lib/utils';

const SOLD_OUT = '품절';

const ProductBox = ({ product, insertedMoney, buyProduct }) => {
  const { id, emoji, name, price, quantity } = product;

  const disabled = quantity === 0 || price > insertedMoney;
  const isSoldOut = quantity === 0;

  return (
    <S.Container>
      <S.Emoji>{emoji}</S.Emoji>
      <S.Name>{name}</S.Name>
      <Button
        theme={BUTTON_THEME.ROUNDED}
        size={BUTTON_SIZE.MEDIUM}
        disabled={disabled}
        onClick={buyProduct(id)}
      >
        {isSoldOut ? SOLD_OUT : formatPrice(price)}
      </Button>
    </S.Container>
  );
};

ProductBox.propTypes = {
  product: PropTypes.object,
  insertedMoney: PropTypes.number,
  buyProduct: PropTypes.func,
};

export default ProductBox;
