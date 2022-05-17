import Button from "components/common/form/Button/Button";
import constants from "utils/constants";

import { productButtonStyle, ProductLi } from "./ProductItem.styled";

const { SOLDOUT_MESSAGE } = constants;

const ProductItem = ({ productData }) => {
  const { name, isInStock, price } = productData;

  return (
    <ProductLi>
      <Button
        data={{ name }}
        styles={productButtonStyle}
        className="product-button"
        isDisabled={!isInStock}
      />
      <p className="product-price">{(isInStock && price) || SOLDOUT_MESSAGE}</p>
    </ProductLi>
  );
};

export default ProductItem;
