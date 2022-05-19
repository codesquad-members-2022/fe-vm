import Button from "components/common/form/Button/Button";
import constants from "utils/constants";

import { productButtonStyle, ProductLi } from "./ProductItem.styled";

const { SOLDOUT_MESSAGE } = constants;

const ProductItem = ({ productData, currentMoney }) => {
  const { name, isInStock, price } = productData;
  const isAvailablePurchase = currentMoney >= price;

  return (
    <ProductLi isAvailablePurchase={isAvailablePurchase} isInStock={isInStock}>
      <Button
        data={{ name }}
        styles={productButtonStyle}
        className="product-button"
        isClickable={isInStock && isAvailablePurchase}
      />
      <p className="product-price">{(isInStock && price) || SOLDOUT_MESSAGE}</p>
    </ProductLi>
  );
};

export default ProductItem;
