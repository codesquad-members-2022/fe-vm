import { Button } from "components";
import { AddHistoryContext, InsertCoinContext, SetInsertCoinContext } from "context";
import { useContext } from "react";

function SelectButton({ name, price, stocked }) {
  const insertCoin = useContext(InsertCoinContext);
  const setInsertCoin = useContext(SetInsertCoinContext);
  const addHistory = useContext(AddHistoryContext);

  const isPurchasable = () => {
    if (!insertCoin) return stocked;
    return stocked && price < insertCoin;
  };

  const handleSelectButtonClick = () => {
    if (!insertCoin) return;
    const change = insertCoin - price;
    setInsertCoin(change);
    addHistory("PURCHASE_PRODUCT", { product: name });
    //Todo: ChangeOutlet Component로 이동
    addHistory("RETURN_COIN", { change });
  };

  return (
    <Button
      color={isPurchasable() ? "green" : "white"}
      size="small"
      disabled={isPurchasable() ? false : true}
      onClick={handleSelectButtonClick}
    >
      <strong>{name}</strong>
    </Button>
  );
}

export { SelectButton };
