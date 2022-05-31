import { useState, useReducer } from 'react';

export default function useMoney({ state, reducer }) {
  const [moneyInfos, dispatchMoneyInfos] = useReducer(reducer, state);

  const [inputPrice, setInputPrice] = useState([]);

  const onDecreaseWalletMoney = (price) => {
    dispatchMoneyInfos({ type: 'INSERT', payload: price });
  };
  const onDecreaseWalletMoneyByInput = (price) => {
    dispatchMoneyInfos({ type: 'INSERT_INPUT', payload: price });
  };
  const onAddRefund2MoneyInfo = (price) => {
    dispatchMoneyInfos({ type: 'REFUND', payload: price });
  };

  return {
    inputPrice,
    setInputPrice,
    moneyInfos,
    onDecreaseWalletMoney,
    onDecreaseWalletMoneyByInput,
    onAddRefund2MoneyInfo,
  };
}
