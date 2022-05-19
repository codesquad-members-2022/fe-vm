import React, {useReducer} from 'react';

import * as createDispatch from '../Reducer/AccountActions';

export const useAccount = (initial, reducer) => {
  const [userMoney, dispatchUserMoney] = useReducer(reducer, initial);
  // const [hasInsertedMoney, setHasInsertedMoney] = useState(false);

  const insertMoney = createDispatch.insertMoney(dispatchUserMoney);

  const refundMoney = createDispatch.refundMoney(dispatchUserMoney);

  const buyProduct = (productPrice, productTitle) => () =>
    createDispatch.buyProduct(dispatchUserMoney)(productPrice, productTitle);

  const inputMoney = createDispatch.inputMoney(dispatchUserMoney);

  // const refundTimer = timerState => {
  //   const timer = setTimeout(
  //     () => {
  //       refundMoney();
  //     },
  //     timerState === 'inserted' ? 5000 : 2000,
  //   );

  //   return shouldClear => {
  //     if (shouldClear) {
  //       clearTimeout(timer);
  //     }
  //   };
  // };

  // useEffect(() => {
  //   if (userMoney.insertedMoney > 0) {
  //     const timerController = refundTimer(5000);
  //     timerController(hasInsertedMoney);
  //     setHasInsertedMoney(false);
  //   }
  // }, [userMoney]);

  return {insertMoney, refundMoney, buyProduct, inputMoney, userMoney};
};
