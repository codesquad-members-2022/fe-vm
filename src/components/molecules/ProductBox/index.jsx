import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label';
import Button from 'components/atoms/Button';
import * as Styled from 'components/molecules/ProductBox/ProductBox.style';
import { CURRENCY_STR } from 'constants';
import { ProductContext } from 'context/Product';
import { WalletContext } from 'context/Wallet';

const SOLD_OUT_TEXT = 'SOLD OUT';

const ProductBox = ({ id, icon, cost, isSoldOut, isActive, ...props }) => {
  const { productDispatch, buyProduct } = useContext(ProductContext);
  const { walletDispatch, spendMoney } = useContext(WalletContext);

  const buttonStyle = {
    sizeType: 'thin',
    borderType: 'rounded',
    colorType: isSoldOut ? 'soldOut' : isActive ? 'active' : 'disabled',
    disabled: isSoldOut || !isActive,
  };

  const handleOnClick = () => {
    buyProduct(productDispatch, id);
    spendMoney(walletDispatch, cost);
  };

  return (
    <Styled.ProductBox flexType="centerAround" borderType="rounded">
      <Label flexType="center" sizeType="medium" fontType="logo" borderType="none">
        {icon}
      </Label>
      <Button {...buttonStyle} onClick={handleOnClick}>
        {isSoldOut ? SOLD_OUT_TEXT : `${cost} ${CURRENCY_STR}`}
      </Button>
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
