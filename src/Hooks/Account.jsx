import React, {useReducer} from 'react';

import * as createDispatch from '../Reducer/AccountActions';

export const useAccount = (initial, reducer) => {
  const [userMoney, dispatchUserMoney] = useReducer(reducer, initial);

  const insertMoney = createDispatch.insertMoney(dispatchUserMoney);

  const refundMoney = createDispatch.refundMoney(dispatchUserMoney);

  const buyProduct = (productPrice, productTitle) => () =>
    createDispatch.buyProduct(dispatchUserMoney)(productPrice, productTitle);

  const inputMoney = createDispatch.inputMoney(dispatchUserMoney);

  return {insertMoney, refundMoney, buyProduct, inputMoney, userMoney};
};
