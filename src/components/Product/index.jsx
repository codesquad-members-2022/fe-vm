import React from 'react';
import styled, { css } from 'styled-components';

const Highlight = css`
  border-color: red;
`;

const ProductLayer = styled.span`
  padding: 4px;
  border: 2px solid black;
  border-radius: 8px;
  ${({ purchasable }) => purchasable && Highlight};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.header`
  width: 100%;
  font-size: 18px;
  text-align: center;
  flex-grow: 1;
`;

const Price = styled.footer`
  flex-shrink: 0;
`;

const Product = ({ name, price, stock, purchasable }) => {
  return (
    <ProductLayer purchasable={purchasable}>
      <Name>{name}</Name>
      <span>{stock}개 남음</span>
      <Price>{price.toLocaleString()}원</Price>
    </ProductLayer>
  );
};

export default Product;
