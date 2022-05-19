import ProductList from "./ProductList";
import ProductCategoryTab from "./ProductCategoryTab";

const ProductStand = ({ beverage }) => {
  return (
    <div className="flex flex-col w-[70%]">
      <ProductCategoryTab />
      <ProductList beverage={beverage} />
    </div>
  );
};

export default ProductStand;
