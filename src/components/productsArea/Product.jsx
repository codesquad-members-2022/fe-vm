import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductBtn, Detail, Price } from 'components/productsArea/Product.style';
import { addCommasToNumber } from 'utils/util';
import { FinalPayContext, FinalPaySetContext } from 'Context/FinalPayProvider';
import { SelectedProductSetContext } from 'Context/SelectedProductProvider';

export default function Product({ detail, price, quantity, disabled }) {
  const setSelectedProduct = useContext(SelectedProductSetContext);
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];

  const handleProductClick = () => {
    if (!finalPay) return;
    setSelectedProduct({ detail, price });
    setFinalPay(0);
  };

  return (
    <ProductBtn quantity={quantity} disabled={disabled} onClick={handleProductClick}>
      <Detail>{detail}</Detail>
      <Price>{addCommasToNumber(price)}</Price>
    </ProductBtn>
  );
}

Product.propTypes = {
  detail: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  disabled: PropTypes.bool
};

Product.defaultProps = {
  detail: '',
  price: 0,
  quantity: 0,
  disabled: false
};
