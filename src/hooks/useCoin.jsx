import { useState, useCallback } from "react";

function useCoin(init) {
  const [coin, setCoin] = useState(init);

  const selectCoin = useCallback((unit) => {
    setCoin((prevCoin) =>
      prevCoin.map((current) => {
        if (current.unit === unit) {
          return { ...current, count: current.count - 1 };
        }
        return current;
      })
    );
  }, []);

  const correctCoin = useCallback(
    (inputCoin) => {
      let acc = 0;

      const coinArr = coin.map((obj) => {
        return { ...obj, total: obj.unit * obj.count };
      });

      const totalCoin = coinArr.reduce((acc, { total }) => acc + total, 0);
      if (inputCoin > totalCoin) {
        setCoin((prevCoin) =>
          prevCoin.map((current) => {
            return { ...current, count: 0 };
          })
        );
        return totalCoin;
      }

      function recursive(remainCoin) {
        for (let i = 0; i < coinArr.length; i++) {
          const { unit, count, total } = coinArr[i];

          if (inputCoin <= acc) return acc;
          else if (Math.floor(total / remainCoin) > 0) {
            if (count) {
              selectCoin(unit);
              acc += unit;
              const result = recursive(remainCoin - unit);
              return result;
            }
          }
        }
      }

      return recursive(inputCoin);
    },
    [coin, selectCoin]
  );

  return { coin, selectCoin, correctCoin };
}

export { useCoin };
