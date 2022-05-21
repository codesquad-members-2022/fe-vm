import ProductItem from "./ProductItem";

const ProductList = ({ products, tabIndex }) => {
  // FIXME 임시 데이터
  const productCategoryItems = {
    1: products.map((itemInfo) => <ProductItem key={itemInfo.id} {...itemInfo} />),
    2: <div>주스 아이템들</div>,
    3: <div>차 아이템들</div>,
    4: <div>디저트 아이템들</div>,
  };

  return (
    <div className="grid grid-cols-4 grid-flow-row gap-2 px-4 pt-2 pb-4">
      {productCategoryItems[tabIndex]}
    </div>
  );
};

export default ProductList;
