import React from 'react';
import styled from 'styled-components';

export const Products = ({title, price}) => {
  return (
    <ProductWrapper>
      <Product>{title}</Product>
      <PriceTag>{price}</PriceTag>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border: 1px solid black;
`;

const PriceTag = styled.p`
  padding: 10px;
`;
