import { Button } from "components";

function Coin({ unit, count }) {
  return (
    <>
      <Button color="yellow" size="medium">
        <strong>{unit}</strong>
      </Button>
      <span>{count}</span>
    </>
  );
}

export { Coin };
