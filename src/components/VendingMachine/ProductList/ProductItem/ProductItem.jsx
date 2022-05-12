import Button from "components/common/form/Button/Button";

import { productButtonStyle, ProductLi } from "./ProductItem.styled";

const ProductItem = ({ productData }) => {
  return (
    <ProductLi>
      <Button
        data={productData}
        styles={productButtonStyle}
        className="product-button"
      />
      <p className="product-price">{productData.price}</p>
    </ProductLi>
  );
};

export default ProductItem;
