import React, { useContext } from 'react';
import styled from 'styled-components';
import { F_center, Default_radius, Color } from 'Assets/Style/Common';
import { ProductContext } from 'context/productStock';

const VMListItem = ({ product, coin }) => {
  const { ProductStock, setProductStock } = useContext(ProductContext);

  const stockCountHandler = () => {
    setProductStock((prevState) => {
      if (prevState[product.id] === 0) {
        return prevState;
      }
      const currentState = {
        ...prevState,
        [product.id]: prevState[product.id] - 1,
      };
      return currentState;
    });
  };
  return (
    <VMListItemBox
      onClick={stockCountHandler}
      price={product.price}
      coin={coin}
      stock={ProductStock[product.id]}>
      <ProductImg src={product.img} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{`${product.price}원`}</ProductPrice>
      </ProductInfo>
    </VMListItemBox>
  );
};

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14rem;
  height: 6.4rem;
  margin-top: 2rem;
`;

const ProductName = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const ProductPrice = styled.span`
  color: ${Color.yellowGreen};
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 1.2rem;
`;

const ProductImg = styled.img`
  margin-top: 2.3rem;
  border: none;
  width: 9rem;
  height: 9rem;
`;

const VMListItemBox = styled.div`
  ${F_center}
  flex-direction: column;
  ${Default_radius}
  width: 18.8rem;
  height: 22rem;
  background-color: ${Color.backGroundGray}
  border: 1px solid ${Color.lightGray};
  ${({ price, coin, stock }) => {
    if (stock === 0) {
      return `
        opacity: 0.2;
        pointer-events:none;
      `;
    }
    if (price <= coin) {
      return `
        border: 2px solid ${Color.yellowGreen};
        pointer-events:auto;
        cursor: pointer;
      `;
    }
    return `
      pointer-events:none;
    `;
  }}
`;

export default VMListItem;
