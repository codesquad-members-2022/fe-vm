export const insertMoney = dispatchFn => income => {
  dispatchFn({type: 'insert', incomeMoney: income});
};

export const refundMoney = dispatchFn => () => {
  dispatchFn({type: 'refund'});
};

export const buyProduct = dispatchFn => productPrice => {
  dispatchFn({type: 'buy', incomeMoney: productPrice});
};

export const inputMoney = dispatchFn => income => {
  dispatchFn({type: 'input', incomeMoney: income});
};

export const logHistories = dispatchFn => productTitles => {
  dispatchFn({type: 'log', logs: productTitles});
};
