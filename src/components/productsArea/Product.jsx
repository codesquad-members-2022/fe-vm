/* eslint-disable react/prop-types */
import React from 'react';
import { ProductBtn, Detail, Price } from 'components/productsArea/Product.style';

export default function Product({ detail, price }) {
  return (
    <ProductBtn>
      <Detail>{detail}</Detail>
      <Price>{price}</Price>
    </ProductBtn>
  );
}
