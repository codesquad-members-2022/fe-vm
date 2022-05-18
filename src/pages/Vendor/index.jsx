import React, { useContext } from 'react';

import CashDisplay from '@/components/CashDisplay';
import ItemBlock from '@/components/ItemBlock';
import UserLog from '@/components/UserLog';
import { ACTION } from '@/constants/actionType';
import { INPUT_STATE } from '@/constants/constants';
import { VendorContext } from '@/context/VendorProvider';
import * as S from '@/pages/Vendor/Vendor.style';

const Vendor = () => {
  const {
    state: { userCash, inputState, balance, userLog, product, insertedCash },
    dispatch,
  } = useContext(VendorContext);

  const handleReturnBtnClick = () => {
    if (inputState === INPUT_STATE.default) {
      return;
    }

    dispatch({
      type: ACTION.RETURN_CASH,
      payload: {
        userCash,
        userLog,
        insertedCash,
      },
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
        userLog,
      },
    });
  };

  return (
    <>
      <S.VendorWrapper>
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
