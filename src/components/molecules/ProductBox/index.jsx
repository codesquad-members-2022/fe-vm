import React from 'react';

import PropTypes from 'prop-types';

import Button, { BUTTON_THEME, BUTTON_SIZE } from '@components/atoms/Button';
import * as S from '@components/molecules/ProductBox/ProductBox.style';
import { formatPrice } from '@lib/utils';

const ProductBox = ({ emoji, name, price }) => {
  return (
    <S.Container>
      <S.Emoji>{emoji}</S.Emoji>
      <S.Name>{name}</S.Name>
      <Button theme={BUTTON_THEME.ROUNDED} size={BUTTON_SIZE.MEDIUM}>
        {formatPrice(price)}
      </Button>
    </S.Container>
  );
};

ProductBox.propTypes = {
  emoji: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductBox;
