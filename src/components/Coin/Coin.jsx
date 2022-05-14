import { useContext, memo } from "react";
import { InsertCoinContext, CoinContext } from "context";
import { Button } from "components";

function Coin({ unit, count }) {
  const { selectCoin } = useContext(CoinContext);
  const { insertCoin, setInsertCoin } = useContext(InsertCoinContext);

  const clickCoin = () => {
    if (!count) return;
    selectCoin(unit, count);
    setInsertCoin(insertCoin + unit);
  };

  return (
    <>
      <Button color="yellow" size="medium" onClick={clickCoin}>
        <strong>{unit}</strong>
      </Button>
      <span>{count}</span>
    </>
  );
}

const areEqual = (prevProps, nextProps) => prevProps.count === nextProps.count;
const MemoizedCoin = memo(Coin, areEqual);

export { MemoizedCoin };
