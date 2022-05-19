import React, {useReducer} from 'react';

import * as createDispatch from '../Reducer/AccountActions';

export const useAccount = (initial, reducer) => {
  const [userMoney, dispatchUserMoney] = useReducer(reducer, initial);

  const insertMoney = createDispatch.insertMoney(dispatchUserMoney);

  const refundMoney = createDispatch.refundMoney(dispatchUserMoney);

  //TODO: refactoring 로직
  const buyProduct = productPrice =>
    createDispatch.buyProduct(dispatchUserMoney)(productPrice);

  const inputMoney = createDispatch.inputMoney(dispatchUserMoney);

  const logHistories = createDispatch.logHistories(dispatchUserMoney);

  return {
    insertMoney,
    refundMoney,
    buyProduct,
    inputMoney,
    userMoney,
    logHistories,
  };
};
