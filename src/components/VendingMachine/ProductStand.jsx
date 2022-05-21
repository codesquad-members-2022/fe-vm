import ProductList from "./ProductList";
import ProductCategoryTab from "./ProductCategoryTab";
import { useState } from "react";

const ProductStand = ({ products }) => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="flex flex-col w-[70%]">
      <ProductCategoryTab tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <ProductList products={products} tabIndex={tabIndex} />
    </div>
  );
};

export default ProductStand;
