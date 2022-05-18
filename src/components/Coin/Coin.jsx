import { useContext, memo } from "react";
import { SetInsertCoinContext, SetCoinContext, HistoryContext } from "context";
import { Button } from "components";

function Coin({ unit, count }) {
  const selectCoin = useContext(SetCoinContext);
  const setInsertCoin = useContext(SetInsertCoinContext);
  const { addHistory } = useContext(HistoryContext);

  const handleCoinClick = () => {
    if (!count) return;
    selectCoin(unit);
    setInsertCoin((prevCoin) => prevCoin + unit);
    addHistory("INSERT_COIN", {
      coin: unit,
    });
  };

  return (
    <>
      <Button color="yellow" size="medium" onClick={handleCoinClick}>
        <strong>{unit}</strong>
      </Button>
      <span>{count}</span>
    </>
  );
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.count === nextProps.count;
};

const MemoizedCoin = memo(Coin, areEqual);

export { MemoizedCoin };
