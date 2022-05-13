import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductBtn, Detail, Price } from 'components/productsArea/Product.style';
import { FinalPayContext } from 'pages/VendingMachine';
import { SelectedProductContext } from 'App';

export default function Product({ detail, price, quantity, disabled }) {
  const setSelectedProduct = useContext(SelectedProductContext)[1];
  const [finalPay, setFinalPay] = useContext(FinalPayContext);

  const handleProductClick = () => {
    if (!finalPay) return;
    setSelectedProduct({ detail, price });
    setFinalPay(0);
  };

  return (
    <ProductBtn quantity={quantity} disabled={disabled} onClick={handleProductClick}>
      <Detail>{detail}</Detail>
      <Price>{price.toLocaleString('en')}</Price>
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
