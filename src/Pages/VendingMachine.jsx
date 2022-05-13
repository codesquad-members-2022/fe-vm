import React from 'react';
import styled from 'styled-components';

import {ProductList, VendingMachineInterface} from '../Component';

import {PRODUCTS_DATA} from '../mocks/ProductData';

export const VendingMachine = () => {
  return (
    <VendingMachineWrapper>
      <ProductList ProductsData={PRODUCTS_DATA} />
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
