import React from 'react';

import CashDisplay from '@/components/CashDisplay';
import ItemBlock from '@/components/ItemBlock';
import mockData from '@/mock/product';
import * as S from '@/pages/Vendor/Vendor.style';

const Vendor = () => {
  return (
    <>
      <S.VendorWrapper>
        <CashDisplay isBalance small />
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
          <CashDisplay />
          <S.ResetButton>RESET</S.ResetButton>
          <S.Logger>INPUT $100</S.Logger>
        </S.SideWrapper>
      </S.VendorWrapper>
    </>
  );
};

export default Vendor;
