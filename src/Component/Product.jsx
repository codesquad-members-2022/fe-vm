import React from 'react';
import styled, {css} from 'styled-components';

import {useTimer} from '../Store';

const handleProductCard = (
  price,
  title,
  buyProduct,
  clearTimer,
  setTimer,
  logHistories,
) => {
  clearTimer();
  buyProduct(price); //TODO: 로직 변경 요망 -> 클로저 삭제
  setTimer(logHistories, 'buy', title);
};

export const Product = ({
  title,
  price,
  buyProduct,
  walletState,
  logHistories,
}) => {
  const {clearTimer, setTimer} = useTimer();

  return (
    <ProductWrapper
      insertedMoney={walletState.insertedMoney}
      productPrice={price}
    >
      <ProductThumbnail
        onClick={() => {
          handleProductCard(
            price,
            title,
            buyProduct,
            clearTimer,
            setTimer,
            logHistories,
          );
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
