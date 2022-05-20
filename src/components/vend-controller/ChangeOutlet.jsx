import { Button } from "components";
import { SetInsertCoinContext } from "context";
import { useContext } from "react";

function ChangeOutlet() {
  const setInsertCoin = useContext(SetInsertCoinContext);
  const handleChangeButtonClick = () => setInsertCoin(0);

  return (
    <Button color="black" size="large" onClick={handleChangeButtonClick}>
      CHANGE
    </Button>
  );
}

export { ChangeOutlet };
