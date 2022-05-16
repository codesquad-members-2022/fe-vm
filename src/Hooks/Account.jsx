import React, {useReducer} from 'react';

export const useAccount = (initial, reducer) => {
  const [userMoney, dispatchUserMoney] = useReducer(reducer, initial);

  const insertMoney = income => {
    dispatchUserMoney({type: 'insert', incomeMoney: income});
  };

  const refundMoney = () => {
    dispatchUserMoney({type: 'refund'});
  };

  const buyProduct = productPrice => {
    dispatchUserMoney({type: 'buy', incomeMoney: productPrice, quantity: 1});
  };

  return {insertMoney, refundMoney, buyProduct, userMoney};
};
