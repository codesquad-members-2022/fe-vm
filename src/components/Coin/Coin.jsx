import { useContext, memo } from "react";
import { SetInsertCoinContext, SetCoinContext } from "context";
import { Button } from "components";

function Coin({ unit, count }) {
  const selectCoin = useContext(SetCoinContext);
  const setInsertCoin = useContext(SetInsertCoinContext);

  const handleCoinClick = () => {
    if (!count) return;
    selectCoin(unit);
    setInsertCoin((prevCoin) => prevCoin + unit);
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
