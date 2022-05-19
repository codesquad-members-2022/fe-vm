import ProductItem from "./ProductItem";

const ProductList = ({ beverage }) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-2 px-4 pt-2 pb-4">
      {beverage.map((itemInfo) => (
        <ProductItem key={itemInfo.id} {...itemInfo} />
      ))}
    </div>
  );
};

export default ProductList;
