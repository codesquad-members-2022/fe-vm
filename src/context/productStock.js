import { createContext, useState } from 'react';
import VMproducts from 'Assets/VMData/products';

const stock = {};
VMproducts.forEach((product) => {
  stock[product.id] = product.stock;
});

const ProductContext = createContext(null);

const StockProvider = ({ children }) => {
  const [ProductStock, setProductStock] = useState(stock);
  return (
    <ProductContext.Provider value={{ ProductStock, setProductStock }}>
      {children}
    </ProductContext.Provider>
  );
};
export { StockProvider, ProductContext };
