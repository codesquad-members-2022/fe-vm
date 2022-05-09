import React from 'react';
import styled from 'styled-components';

import {Products} from './Products';
import {VendingMachineInterface} from './VendingMachineInterface';

import {PRODUCTS_DATA} from '../../mocks/ProductData';

const createProducts = ProductsList => {
  return ProductsList.map(productData => (
    <Products title={productData.title} price={productData.price} />
  ));
};

export const VendingMachine = () => {
  return (
    <VendingMachineWrapper>
      <ProductList>{createProducts(PRODUCTS_DATA)}</ProductList>
      <VendingMachineInterface />
    </VendingMachineWrapper>
  );
};

const VendingMachineWrapper = styled.div`
  width: 1000px;
  height: 1000px;
  display: flex;
  border: 5px solid black;
`;

const ProductList = styled.ul`
  padding: 10px;
  width: 60%;
  border-right: 5px solid black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
