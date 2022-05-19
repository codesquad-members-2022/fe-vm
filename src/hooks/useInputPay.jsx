/* eslint-disable no-restricted-globals */
import { useState } from 'react';

export default function useInputPay() {
  const [inputPay, setInputPay] = useState(0);

  const MAX_PAYMENT = 100000;

  const isRightPayMent = inputValue => {
    if (inputValue && !Number(inputValue)) return false;
    if (inputValue > MAX_PAYMENT) return false;
    return true;
  };

  const updateInputPay = inputValue => {
    const numPay = parseFloat(inputValue.replace(/[,]/gim, ''));

    if (isRightPayMent(numPay)) setInputPay(numPay);
  };

  const resetInputPay = () => setInputPay(0);

  return { inputPay, updateInputPay, resetInputPay };
}
