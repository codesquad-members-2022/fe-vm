import React, {useState} from 'react';
import styled from 'styled-components';

import {Products} from './Products';
import {test} from '../../mocks/ProductData';

export const VendingMachine = () => {
  return (
    <VendingMachineWrapper>
      <ProductList>
        {test.map(productData => (
          <Products title={productData.title} price={productData.price} />
        ))}
      </ProductList>
      <VM_InterFace>
        <VM_MoneyInput />
      </VM_InterFace>
    </VendingMachineWrapper>
  );
};

const VendingMachineWrapper = styled.div`
  width: 1000px;
  height: 1000px;
  border: 3px solid black;
  display: flex;
`;

const ProductList = styled.ul`
  padding: 10px;
  width: 60%;
  border-right: 3px solid black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const VM_InterFace = styled.ul`
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding 10px
`;

const VM_MoneyInput = styled.input`
  width: 200px;
  height: 80px;
  font-size: 20px;
  border-radius: 20px;
  padding 10px ;


`;
