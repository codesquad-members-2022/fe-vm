import React, { useContext } from 'react';

import CashDisplay from '@/components/CashDisplay';
import ItemBlock from '@/components/ItemBlock';
import UserLog from '@/components/UserLog';
import { INPUT_STATE, PRODUCT_ICON } from '@/constants/constants';
import { VendorContext } from '@/context/VendorProvider';
import productData from '@/mocks/product';
import * as S from '@/pages/Vendor/Vendor.style';

const Vendor = () => {
  const {
    balance,
    setBalance,
    inputState,
    setInputState,
    userBalance,
    setUserBalance,
    userLog,
    setUserLog,
    setInput,
    product,
  } = useContext(VendorContext);

  const handleReturnBtnClick = () => {
    if (inputState === INPUT_STATE.default) return;
    setUserBalance(0);
    setBalance(+balance + +userBalance);
    setUserLog([...userLog, `↩️Return $${userBalance}`]);
    setInput(0);
    setInputState(INPUT_STATE.default);
  };

  const handleItemBlockClick = (id, price) => {
    if (userBalance < price) {
      return;
    }
    setInputState(INPUT_STATE.active);
    const selectedItem = product.find(p => p.id === id);
    selectedItem.stock--;
    const currentUserBalance = userBalance - selectedItem.price;
    setUserLog([
      ...userLog,
      `✅Select ${PRODUCT_ICON[selectedItem.category]}${selectedItem.name} ($${price})`,
      `💳Your Balance: $${currentUserBalance}`,
    ]);
    setUserBalance(currentUserBalance);
    setInput(currentUserBalance);
    if (currentUserBalance <= 0) {
      setInputState(INPUT_STATE.default);
    }
  };

  return (
    <>
      <S.VendorWrapper>
        <CashDisplay isBalance small balance={balance} />
        <S.ProductGrid>
          {productData.map(({ id, name, price, stock, category, categoryId }) => (
            <li key={id} onClick={() => handleItemBlockClick(id, price)}>
              <ItemBlock
                name={name}
                price={price}
                stock={stock}
                purchasable={userBalance >= price}
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
