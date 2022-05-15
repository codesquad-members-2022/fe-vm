import products from "mockData/products";

import ProductItem from "./ProductItem/ProductItem";
import ProductUl from "./ProductList.styled";

const ProductList = () => {
  const productsData = products.productsList;

  return (
    <ProductUl>
      {productsData.map((product) => (
        <ProductItem productData={product} key={product.id} />
      ))}
    </ProductUl>
  );
};

export default ProductList;
