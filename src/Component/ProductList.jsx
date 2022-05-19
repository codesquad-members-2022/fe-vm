import React from 'react';
import styled from 'styled-components';

import {Product} from './Product';

//TODO: naming refactoring
export const ProductList = ({
  ProductsData,
  buyProduct,
  walletState,
  logHistories,
}) => {
  return (
    <ProductListWrapper>
      {createProducts(ProductsData, buyProduct, walletState, logHistories)}
    </ProductListWrapper>
  );
};

const createProducts = (
  ProductsList,
  buyProduct,
  walletState,
  logHistories,
) => {
  return ProductsList.map(productData => (
    <Product
      key={productData.id}
      title={productData.title}
      price={productData.price}
      buyProduct={buyProduct}
      walletState={walletState}
      logHistories={logHistories}
    />
  ));
};

const ProductListWrapper = styled.ul`
  padding: 10px;
  width: 60%;
  border-right: 5px solid black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
