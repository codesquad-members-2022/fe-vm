import React from 'react';
import styled, { css } from 'styled-components';

const Product = ({ name, price, stock, purchasable }) => {
  const outOfStock = stock === 0;
  const maxNumOfDisplay = 99;

  return (
    <ProductLayer purchasable={purchasable} outOfStock={outOfStock}>
      <Name>{name}</Name>
      <Price>{price.toLocaleString()}원</Price>
      <Stock>
        {outOfStock ? null : Math.min(maxNumOfDisplay, stock)}
        <span>{stock > maxNumOfDisplay && '+'}</span>
      </Stock>
      {outOfStock && <DisabledMark>Out Of Stock</DisabledMark>}
    </ProductLayer>
  );
};

const disabled = css`
  border: 2px solid #ee4646;
  background-color: #fdb6b6;
  cursor: not-allowed;

  &:hover {
    background-color: #fdb6b688;
  }

  &:active {
    background-color: #fdb6b666;
  }
`;

const highlight = css`
  border-color: #ff9810;
  background-color: #ff981055;

  &:hover {
    background-color: #ff981033;
  }

  &:active {
    background-color: #ff981022;
  }
`;

const ProductLayer = styled.span`
  position: relative;
  padding: 4px;
  border: 2px solid #000;
  border-radius: 8px;
  user-select: none;
  background-color: #0003;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: background-color 400ms;
  width: 120px;
  height: 120px;
  overflow: hidden;

  &:hover {
    background-color: #0002;
  }

  &:active {
    background-color: #0004;
  }

  ${({ purchasable }) => purchasable && highlight};
  ${({ outOfStock }) => outOfStock && disabled}
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

const Stock = styled.span`
  position: absolute;
  top: -5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  color: inherit;
  opacity: 0;
  transition: opacity 400ms;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 30px;
  }
`;

const DisabledMark = styled.span`
  position: absolute;
  bottom: 40px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150%;
  height: 30%;
  background-color: #ff233d;
  transform: rotate(-30deg);
`;

export default Product;
