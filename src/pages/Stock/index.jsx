import React from 'react';

import ItemBlock from '@/components/ItemBlock';
import UserLog from '@/components/UserLog';
import productData from '@/mocks/product';
import * as S from '@/pages/Vendor/Vendor.style';
import { Title } from '@/styles/common';

const Stock = () => {
  return (
    <>
      <S.VendorWrapper>
        <S.ProductGrid>
          {productData.map(({ id, name, price, stock, category, categoryId }) => (
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
          <UserLog isStock></UserLog>
        </S.SideWrapper>
      </S.VendorWrapper>
    </>
  );
};

export default Stock;
