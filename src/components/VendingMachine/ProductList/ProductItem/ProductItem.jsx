import { useContext, useEffect, useState } from "react";

import Button from "components/common/form/Button/Button";
import { SetDelayContext } from "contexts/delayContext";
import {
  InsertedMoneyContext,
  MoneyActionsContext,
} from "contexts/moneyContext";
import { SetProgressContext } from "contexts/progressContext";
import moneyHelper from "helper/moneyHelper";
import constants from "utils/constants";

import { productButtonStyle, ProductLi } from "./ProductItem.styled";

const {
  SOLDOUT_MESSAGE,
  DELAY: { DEFAULT_DELAY_MS },
} = constants;
const { getTotalInsertedMoney, computeTotalMoney } = moneyHelper;

const ProductItem = ({ productData, currentMoney }) => {
  const [isInPurchaseProgress, setIsInPurchaseProgress] = useState(false);

  const { insertedMoney } = useContext(InsertedMoneyContext);
  const { spendInsertedMoney, resetInsertedMoney } =
    useContext(MoneyActionsContext);
  const setPurchasingNewItem = useContext(SetDelayContext);
  const updateProgress = useContext(SetProgressContext);

  const { name, isInStock, price, id } = productData;
  const isAvailablePurchase = currentMoney >= price;

  const handleProductButtonClick = () => {
    updateProgress("purchase", price, name);
    setPurchasingNewItem(name);
    spendInsertedMoney(price);

    setTimeout(() => {
      setIsInPurchaseProgress(true);
    }, DEFAULT_DELAY_MS);
  };

  useEffect(() => {
    if (!isInPurchaseProgress) {
      return;
    }

    setIsInPurchaseProgress(false);
    setPurchasingNewItem("");
    resetInsertedMoney(getTotalInsertedMoney(insertedMoney));
    updateProgress("return", computeTotalMoney(insertedMoney), name);
  }, [isInPurchaseProgress]);

  return (
    <ProductLi isAvailablePurchase={isAvailablePurchase} isInStock={isInStock}>
      <Button
        data={{ name }}
        styles={productButtonStyle}
        className="product-button"
        isClickable={isInStock && isAvailablePurchase}
        onClick={() => handleProductButtonClick({ id, price, name })}
      />
      <p className="product-price">{(isInStock && price) || SOLDOUT_MESSAGE}</p>
    </ProductLi>
  );
};

export default ProductItem;
