import { createContext, useState } from "react";
import { products } from "../datas/products";
import Product from "../components/Product";

const ProductContext = createContext({
  state: products,
  actions: {
    setAmount: () => {},
  },
});

function ProductProvider() {
  const [amount, setAmount] = useState();

  const value = {
    state: products,
    actions: {
      setAmount: () => {},
    },
  };
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
