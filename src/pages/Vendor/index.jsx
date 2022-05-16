import React, { useContext } from 'react';

import CashDisplay from '@/components/CashDisplay';
import ItemBlock from '@/components/ItemBlock';
import { CashContext } from '@/context/CashProvider';
import mockData from '@/mocks/product';
import * as S from '@/pages/Vendor/Vendor.style';

const Vendor = () => {
  const { balance } = useContext(CashContext);
  return (
    <>
      <S.VendorWrapper>
        <CashDisplay isBalance small balance={balance} />
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
          <CashDisplay />
          <S.ResetButton>RESET</S.ResetButton>
          <S.Logger>INPUT $100</S.Logger>
        </S.SideWrapper>
      </S.VendorWrapper>
    </>
  );
};

export default Vendor;
