import { useState, useCallback } from "react";
import { near } from "utils";

function useCoin(init) {
  const [coin, setCoin] = useState(init);

  const decreaseCount = (prevCoin, unit) =>
    prevCoin.map((current) => {
      if (current.unit === unit) {
        return { ...current, count: current.count - 1 };
      }
      return current;
    });

  const selectCoin = useCallback((unit) => {
    setCoin((prevCoin) => decreaseCount(prevCoin, unit));
  }, []);

  const initCoin = (totalCoin) => {
    setCoin((prevCoin) =>
      prevCoin.map((current) => {
        return { ...current, count: 0 };
      })
    );
    return totalCoin;
  };

  const correctCoin = useCallback(
    (inputCoin) => {
      let copyCoin = coin;
      const totalCoin = coin.reduce((acc, { unit, count }) => acc + unit * count, 0);
      let acc = 0;

      if (inputCoin > totalCoin) return initCoin(totalCoin);

      function recursive(remainCoin) {
        const unitArr = copyCoin.map(({ count, unit }) => count && unit).filter((e) => e !== 0);
        const unit = near(unitArr, remainCoin);

        const nearCoin = copyCoin.find((e) => e.unit === unit).unit;

        acc += nearCoin;
        copyCoin = decreaseCount(copyCoin, unit);

        if (inputCoin <= acc) {
          setCoin(copyCoin);
          return acc;
        }

        const result = recursive(remainCoin - nearCoin);
        return result;
      }

      return recursive(inputCoin);
    },
    [coin]
  );

  return { coin, selectCoin, correctCoin };
}

export { useCoin };
