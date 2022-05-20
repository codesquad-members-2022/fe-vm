import { useCallback, useEffect } from "react";

export const calculateTotal = (keysArr, json) => {
  const total = keysArr.reduce((acc, key) => acc + Number(key) * json[key], 0);

  return total;
};

export function getNeededMoney(inputMoney, unitArr) {
  let total = inputMoney;
  const addedMoney = [];

  unitArr.forEach((unit) => {
    const quotient = (total / unit) >> 0;
    const remainder = total % unit;
    if (quotient >= 1) {
      addedMoney.push([unit, quotient]);
      total = remainder;
    }
  });

  return addedMoney;
}

export function debounce(fn, ms) {
  let lastDebounceSymbol;

  return (...args) => {
    const symbol = Symbol();
    lastDebounceSymbol = symbol;
    setTimeout(() => {
      if (lastDebounceSymbol !== symbol) return;
      fn(...args);
    }, ms);
  };
}

export function throttle(fn, ms) {
  let timer = null;

  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
      }, ms);
    }
  };
}
