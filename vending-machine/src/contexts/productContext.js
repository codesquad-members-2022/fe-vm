import { createContext, useState } from "react";
import { products } from "../datas/products";
import Product from "../components/Product";

const initialState = {
  state: products,
  actions: {
    setAmount: () => {},
  },
};

const ProductContext = createContext(initialState);

function ProductProvider() {
  const [amount, setAmount] = useState();

  const value = initialState;
  return (
    <ProductContext.Provider value={value}>
      {value.state.map((product, idx) => (
        <Product
          key={idx}
          title={product.title}
          price={product.price}
        ></Product>
      ))}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
