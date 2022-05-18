import React from 'react';
import styled from 'styled-components';
import { Default_radius, Default_shadow, Color } from 'Assets/Style/Common';
import VMListItem from './item';
import VMproducts from 'Assets/VMData/products';
import { StockProvider } from 'context/productStock';

const VMItemList = () => {
  const products = VMproducts.map((product) => {
    return <VMListItem key={product.id} product={product} coin={1000} />;
  });

  return (
    <VMItemListBox>
      <StockProvider>{products}</StockProvider>
    </VMItemListBox>
  );
};

const VMItemListBox = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(18.8rem, 4fr));
  grid-auto-rows: 22rem;
  ${Default_radius}
  ${Default_shadow}
  background-color: ${Color.darkGray};
  padding: 4rem;
  width: 81.2rem;
  heigh: 70rem;
`;

export default VMItemList;
