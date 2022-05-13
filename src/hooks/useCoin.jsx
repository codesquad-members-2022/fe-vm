import { useState, useCallback } from "react";

function useCoin(init) {
  const [coin, setCoin] = useState(init);

  const selectCoin = useCallback(
    (unit, count) => {
      const copyArray = [...coin];
      const findIndex = coin.findIndex((e) => e.unit === unit);
      copyArray[findIndex] = { ...copyArray[findIndex], count: count - 1 };
      setCoin(copyArray);
    },
    [coin]
  );

  return { coin, selectCoin };
}

export { useCoin };
