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
          {mockData.map(({ id, name, price, stock, category, categoryId }) => (
            <li key={id}>
              <ItemBlock
                name={name}
                price={price}
                stock={stock}
                category={category}
                categoryId={categoryId}
              />
            </li>
          ))}
        </S.ProductGrid>
        <S.SideWrapper>
          <Title>MY STOCK</Title>
          <S.Logger isStock>
            {mockData.map(({ id, name, stock }) => (
              <li key={id}>
                <Log>{`${name} : ${stock}`}</Log>
              </li>
            ))}
          </S.Logger>
        </S.SideWrapper>
      </S.VendorWrapper>
    </>
  );
};

export default Stock;
