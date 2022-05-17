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

  return { coin, selectCoin };
}

export { useCoin };
