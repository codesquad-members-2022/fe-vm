import { useContext } from "react";

import { InsertedMoneyContext } from "contexts/moneyContext";
import moneyHelper from "helper/moneyHelper";
import products from "mockData/products";

import ProductItem from "./ProductItem/ProductItem";
import ProductUl from "./ProductList.styled";

const { computeTotalMoney } = moneyHelper;
const productsData = products.productsList;

const ProductList = () => {
  const { insertedMoney } = useContext(InsertedMoneyContext);
  const totalMoney = computeTotalMoney(insertedMoney);

  return (
    <ProductUl>
      {productsData.map((product) => (
        <ProductItem
          productData={product}
          key={product.id}
          currentMoney={totalMoney}
        />
      ))}
    </ProductUl>
  );
};

export default ProductList;
