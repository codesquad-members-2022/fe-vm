import { MachineDispatchContext, MachineStateContext } from "contexts/MachineProvider";
import { useContext } from "react";
import { convertMoneyUnit } from "utils";
import { styledBePurchase, styledIsEmptyProduct } from "helpers/styleTemplate";
import EMPTY_IMG from "assets/텅.png";
import { ProductDispatchContext, ProductStateContext } from "contexts/ProductProvider";

const ProductItem = ({ id, image, name, price, count }) => {
  const { totalMoney } = useContext(MachineStateContext);
  const { onDecreaseMoneyInMachine } = useContext(MachineDispatchContext);
  const { onDecreaseProduct } = useContext(ProductDispatchContext);

  const handleBuyProduct = () => {
    if (count <= 0 || totalMoney < price) return;
    onDecreaseProduct(id);
    onDecreaseMoneyInMachine(price);
  };

  const getImage = count > 0 ? image : EMPTY_IMG;

  return (
    <div
      className={`${
        styledIsEmptyProduct(count) || styledBePurchase(price, totalMoney)
      } flex flex-col gap-1 items-center p-2 rounded-xl `}
      onClick={handleBuyProduct}
    >
      <img className="rounded-full " src={getImage} alt={name} />
      <h3 className="flex-1 text-sm font-semibold tracking-tighter ">{name}</h3>
      <span>{convertMoneyUnit(price, "kr") + "원"}</span>
    </div>
  );
};

export default ProductItem;
