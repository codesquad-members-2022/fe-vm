import products from "mockData/products";

import ProductItem from "./ProductItem/ProductItem";
import ProductUl from "./ProductList.styled";

const ProductList = () => {
  const productsData = products.productsList;

  return (
    <ProductUl>
      <ProductItem productsData={productsData} />
    </ProductUl>
  );
};

export default ProductList;
