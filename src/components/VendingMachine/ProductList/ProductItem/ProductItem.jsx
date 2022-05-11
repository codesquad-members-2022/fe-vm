import Button from "components/common/form/Button/Button";

import { productButtonStyle, ProductLi } from "./ProductItem.styled";

const ProductItem = ({ productsData }) => {
  return productsData.map((product) => (
    <ProductLi key={product.id}>
      <Button
        data={product}
        styles={productButtonStyle}
        className="product-button"
      />
      <p className="product-price">{product.price}</p>
    </ProductLi>
  ));
};

export default ProductItem;
