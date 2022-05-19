import { MachineStateContext } from "contexts/MachineProvider";
import { useContext } from "react";
import { convertMoneyUnit } from "utils";
import { styledBePurchase, styledIsEmptyProduct } from "helpers/styleTemplate";

const ProductItem = ({ id, image, name, price, count }) => {
  const { totalMoney } = useContext(MachineStateContext);

  const handleClickProduct = () => {
    if (count <= 0) return;
  };

  const getImage = count > 0 ? image : require("assets/텅.png");

  return (
    <div
      className={`${
        styledIsEmptyProduct(count) || styledBePurchase(price, totalMoney)
      } flex flex-col gap-1 items-center p-2 rounded-xl`}
      onClick={handleClickProduct}
    >
      <img className="flex-wrap mb-1 rounded-full" src={getImage} alt={name} />
      <h3 className="flex-1 text-sm font-semibold tracking-tighter ">{count > 0 && name}</h3>
      <span>{count > 0 && convertMoneyUnit(price, "kr") + "원"}</span>
    </div>
  );
};

export default ProductItem;
