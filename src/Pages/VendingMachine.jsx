import React, {useContext, useEffect} from 'react';
import {useAccount} from '../Hooks/Account';
import styled from 'styled-components';

import {UserAccount} from '../Store';
import {ProductList, VendingMachineInterface} from '../Component';
import {PRODUCTS_DATA} from '../mocks/ProductData';
import {MONEY_BUTTON_DATA} from '../mocks/MoneyButtonData';

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

    case 'input':
      let currentMoney = state.currentMoney;
      const inputValue = +action.incomeMoney;
      const currentMoneyList = MONEY_BUTTON_DATA.map(list => {
        list.count = parseInt(currentMoney / list.unit);
        currentMoney = currentMoney % list.unit;
        return list;
      });

      if (inputValue > state.currentMoney) {
        return state; // 히스토리 로그 출력
      }

      const checkedMoney = currentMoneyList.reduce(
        ({inputValue, saved, change}, {unit, count}, idx) => {
          const accCount = parseInt(inputValue / unit);
          if (accCount < count) {
            inputValue = inputValue % unit;
            saved += unit * accCount;
            currentMoneyList[idx].count = accCount - count;
          }

          if (accCount === count) {
            inputValue = inputValue % unit;
            saved += unit * accCount;
            currentMoneyList[idx].count = 0;
          }

          if (accCount > count) {
            saved += unit * count;
            change = change + (accCount - count) * unit;
            currentMoneyList[idx].count = 0;
            inputValue = inputValue % unit;
          }
          return {inputValue, saved, change};
        },
        {inputValue, change: 0, saved: 0},
      );

      // console.log(checkedMoney.saved, checkedMoney.change);

      if (!checkedMoney.change) {
        return {
          currentMoney: state.currentMoney - inputValue,
          insertedMoney: inputValue,
        };
      }

      for (const list of currentMoneyList) {
        if (list.count > 0 && list.unit > checkedMoney.change) {
          console.log('잔돈 ' + checkedMoney.change);
          console.log('보정값' + list.unit);
          return {
            currentMoney: state.currentMoney - checkedMoney.saved - list.unit,
            insertedMoney: checkedMoney.saved + list.unit,
          };
        }
      }

    default:
      throw new Error(`잘못된 액션 입력입니다. ${action.type}`);
  }
};

export const VendingMachine = () => {
  const {account, sinkedAccount} = useContext(UserAccount);
  const {buyProduct, refundMoney, inputMoney, userMoney} = useAccount(
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
