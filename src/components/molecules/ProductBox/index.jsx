import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label';
import Button from 'components/atoms/Button';
import * as Styled from 'components/molecules/ProductBox/ProductBox.style';
import { CURRENCY_STR } from 'constants';

const SOLD_OUT_TEXT = 'SOLD OUT';

const ProductBox = ({ icon, cost, isSoldOut, isActive, ...props }) => {
  const buttonStyle = {
    sizeType: 'thin',
    borderType: 'rounded',
    colorType: isSoldOut ? 'soldOut' : isActive ? 'active' : 'disabled',
    disabled: isSoldOut,
  };

  return (
    <Styled.ProductBox flexType="centerAround" borderType="rounded">
      <Label flexType="center" sizeType="medium" fontType="logo" borderType="none">
        {icon}
      </Label>
      <Button {...buttonStyle}>{isSoldOut ? SOLD_OUT_TEXT : `${cost} ${CURRENCY_STR}`}</Button>
    </Styled.ProductBox>
  );
};

ProductBox.defaultProps = {
  icon: '❌',
  cost: 'Empty',
};

ProductBox.propTypes = {
  icon: PropTypes.string,
  cost: PropTypes.number,
};

export default ProductBox;
