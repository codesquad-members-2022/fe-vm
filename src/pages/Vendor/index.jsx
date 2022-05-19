import React from 'react';

import CashDisplay from '@/components/CashDisplay';
import ItemBlock from '@/components/ItemBlock';
import Timer from '@/components/Timer';
import UserLog from '@/components/UserLog';
import { ACTION } from '@/constants/actionType';
import { INPUT_STATE } from '@/constants/constants';
import { useVendorState, useVendorDispatch } from '@/context/VendorProvider';
import * as S from '@/pages/Vendor/Vendor.style';

const Vendor = () => {
  const { userCash, inputState, balance, product, isInsertedCash, minutes, seconds } =
    useVendorState();
  const dispatch = useVendorDispatch();

  const handleReturnBtnClick = () => {
    if (inputState === INPUT_STATE.default) {
      return;
    }

    dispatch({
      type: ACTION.RETURN_CASH,
    });
  };

  const handleItemBlockClick = (id, price) => {
    if (balance < price) {
      return;
    }

    const selectedItem = product.find(p => p.id === id);
    selectedItem.stock--;
    const currentUserBalance = balance - selectedItem.price;

    dispatch({
      type: ACTION.SELECT_ITEM,
      payload: {
        selectedItem,
        price,
        currentUserBalance,
      },
    });
  };

  return (
    <>
      <S.VendorWrapper>
        <Timer isInsertedCash={isInsertedCash} minutes={minutes} seconds={seconds} />
        <CashDisplay isBalance small balance={userCash} />
        <S.ProductGrid>
          {product.map(({ id, name, price, stock, category, categoryId }) => (
            <li key={id} onClick={() => handleItemBlockClick(id, price)}>
              <ItemBlock
                name={name}
                price={price}
                stock={stock}
                purchasable={balance >= price}
                category={category}
                categoryId={categoryId}
              />
            </li>
          ))}
        </S.ProductGrid>
        <S.SideWrapper>
          <CashDisplay />
          <S.ReturnBtn inputState={inputState} onClick={handleReturnBtnClick}>
            RETURN
          </S.ReturnBtn>
          <UserLog />
        </S.SideWrapper>
      </S.VendorWrapper>
    </>
  );
};

export default Vendor;
