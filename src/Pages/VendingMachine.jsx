import React, {useContext, useEffect, useState} from 'react';
import {useAccount} from '../Hooks/Account';
import styled from 'styled-components';

import {UserAccount} from '../Store';
import {ProductList, VendingMachineInterface} from '../Component';
import {PRODUCTS_DATA} from '../Mocks/ProductData';
import {accountReducer} from '../Reducer';

export const VendingMachine = () => {
  const {account, sinkedAccount} = useContext(UserAccount);
  const {buyProduct, refundMoney, inputMoney, userMoney, logHistories} =
    useAccount(account, accountReducer);

  useEffect(() => {
    sinkedAccount(userMoney);
  }, [userMoney]);

  return (
    <VendingMachineWrapper>
      <ProductList
        ProductsData={PRODUCTS_DATA}
        buyProduct={buyProduct}
        walletState={userMoney}
        logHistories={logHistories}
      />
      <VendingMachineInterface
        handleRefundBtn={refundMoney}
        handleUserInput={inputMoney}
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
