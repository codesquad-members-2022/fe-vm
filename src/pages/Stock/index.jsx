import React from 'react';

import ItemBlock from '@/components/ItemBlock';
import mockData from '@/mock/product';
import * as S from '@/pages/Vendor/Vendor.style';
import { Title, Log } from '@/styles/common';

const Stock = () => {
  return (
    <>
      <S.VendorWrapper>
        <S.ProductGrid>
          {mockData.map(item => (
            <ItemBlock
              key={item.id}
              name={item.name}
              price={item.price}
              stock={item.stock}
              categoryId={item.categoryId}
            />
          ))}
        </S.ProductGrid>
        <S.SideWrapper>
          <Title>MY STOCK</Title>
          <S.Logger isStock>
            {mockData.map(item => (
              <Log key={item.id}>{`${item.name} : ${item.stock}`}</Log>
            ))}
          </S.Logger>
        </S.SideWrapper>
      </S.VendorWrapper>
    </>
  );
};

export default Stock;
