import { useState, useCallback } from "react";

function useBalance(init) {
  const [balance, setBalance] = useState(init);

  const calcBalance = useCallback(
    (coin) => {
      const totalCoin = coin.reduce((acc, cur) => acc + cur.unit * cur.count, 0);
      setBalance(totalCoin);
    },
    [setBalance]
  );

  return { balance, calcBalance };
}

export { useBalance };
