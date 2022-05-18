import React, { createContext, useReducer } from 'react';

import { ACTION } from '@/constants/actionType';
import { INPUT_STATE, PRODUCT_ICON } from '@/constants/constants';
import cash from '@/mocks/cash';
import product from '@/mocks/product';

const initialState = {
  cash,
  product,
  userCash: 0, // 유저가 보유한 돈
  insertedCash: 0, // 유저가 자판기에 현재 투입한 돈
  balance: 0, // 자판기에 있는 잔액
  userLog: [],
  inputState: INPUT_STATE.default,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INSERT_CASH: {
      const { currentCash, balance, userCash, userLog } = action.payload;

      if (currentCash <= 0) {
        return state;
      }

      if (currentCash > userCash) {
        return {
          ...state,
          inputState: INPUT_STATE.warning,
          userLog: [...userLog, `🚫You don't have enough money`],
        };
      }

      return {
        ...state,
        balance: +balance + +currentCash,
        inputState: INPUT_STATE.active,
        userCash: userCash - currentCash,
        userLog: [
          ...userLog,
          `🪙Insert $${currentCash}`,
          `💳Your Balance: ${+balance + currentCash}`,
        ],
      };
    }

    case ACTION.INPUT_ON_CHANGE: {
      const { insertedCash } = action.payload;
      return {
        ...state,
        insertedCash: insertedCash.replace(/(^0+)/, ''),
      };
    }

    case ACTION.ADD_MONEY: {
      const { userCash, cash, unit } = action.payload;
      return {
        ...state,
        userCash: userCash + unit,
        cash,
      };
    }

    case ACTION.SELECT_ITEM: {
      const { selectedItem, price, currentUserBalance, userLog } = action.payload;

      return {
        ...state,
        balance: currentUserBalance,
        insertedCash: currentUserBalance,
        inputState: currentUserBalance <= 0 ? INPUT_STATE.default : INPUT_STATE.active,
        userLog: [
          ...userLog,
          `✅Select ${PRODUCT_ICON[selectedItem.category]}${selectedItem.name} ($${price})`,
          `💳Your Balance: $${currentUserBalance}`,
        ],
      };
    }

    case ACTION.RETURN_CASH: {
      const { userCash, userLog, insertedCash } = action.payload;
      return {
        ...state,
        userCash: +userCash + +insertedCash,
        balance: 0,
        insertedCash: 0,
        inputState: INPUT_STATE.default,
        userLog: [...userLog, `↩️Return $${insertedCash}`],
      };
    }
  }
};

const VendorContext = createContext();

const VendorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <VendorContext.Provider value={value}>{children}</VendorContext.Provider>;
};

export { VendorContext, VendorProvider };
