export const insertMoney = dispatchFn => income => {
  dispatchFn({type: 'insert', incomeMoney: income});
};

export const refundMoney = dispatchFn => () => {
  dispatchFn({type: 'refund'});
};

export const buyProduct = dispatchFn => (productPrice, productTitle) => {
  console.log(productPrice);
  console.log(productTitle);
  dispatchFn({type: 'buy', incomeMoney: productPrice, product: productTitle});
};

export const inputMoney = dispatchFn => income => {
  dispatchFn({type: 'input', incomeMoney: income});
};
