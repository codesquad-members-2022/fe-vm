import React, {useContext, useEffect} from 'react';
import {useAccount} from '../Hooks/Account';
import styled from 'styled-components';

import {UserAccount} from '../Store';
import {ProductList, VendingMachineInterface} from '../Component';
import {PRODUCTS_DATA} from '../mocks/ProductData';

const accountReducer = (state, action) => {
  switch (action.type) {
    case 'insert':
      return {
        currentMoney: state.currentMoney - action.incomeMoney,
        insertedMoney: state.insertedMoney + action.incomeMoney,
      };

    case 'refund':
      return {
        currentMoney: state.currentMoney + state.insertedMoney,
        insertedMoney: 0,
      };

    case 'buy':
      return {
        currentMoney: state.currentMoney,
        insertedMoney: state.insertedMoney - action.incomeMoney,
      };

    default:
      throw new Error(`잘못된 액션 입력입니다. ${action.type}`);
  }
};

export const VendingMachine = () => {
  const {account, sinkedAccount} = useContext(UserAccount);
  const {buyProduct, refundMoney, userMoney} = useAccount(
    account,
    accountReducer,
  );

  useEffect(() => {
    sinkedAccount(userMoney);
  }, [userMoney]);

  return (
    <VendingMachineWrapper>
      <ProductList
        ProductsData={PRODUCTS_DATA}
        handleProductCard={buyProduct}
        walletState={userMoney}
      />
      <VendingMachineInterface
        handleRefundBtn={refundMoney}
        walletState={userMoney}
      />
    </VendingMachineWrapper>
  );
};

const VendingMachineWrapper = styled.div`
  width: 1000px;
  height: 1000px;
  display: flex;
  border: 5px solid black;
`;
