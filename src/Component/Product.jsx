import React, {useContext} from 'react';
import styled, {css} from 'styled-components';

import {UserAccount} from '../Store';

export const Product = ({title, price}) => {
  const {userMoney, buyProduct} = useContext(UserAccount);

  return (
    <ProductWrapper
      insertedMoney={userMoney.insertedMoney}
      productPrice={price}
    >
      <ProductThumbnail
        onClick={() => {
          buyProduct(price);
        }}
      >
        {title}
      </ProductThumbnail>
      <PriceTag>{price}</PriceTag>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;

  ${({insertedMoney, productPrice}) => {
    return insertedMoney > productPrice
      ? css`
          border: 3px solid red;
        `
      : null;
  }}
`;

const ProductThumbnail = styled.div`
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
