import { createContext, useReducer } from 'react';
import PRODUCTS_LIST from 'mock/Products';

const initState = PRODUCTS_LIST;

export const ProductsContext = createContext(initState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initState);

  const stockConsume = product => {
    dispatch({
      type: 'STOCK_CONSUME',
      payload: product,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        productsList: state,
        stockConsume,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'STOCK_CONSUME':
      const updateStock = state.map(product => {
        return product.name === action.payload ? { ...product, stock: product.stock - 1 } : product;
      });
      return updateStock;
    case 'STOCK_UP':
      return;
    default:
      throw new Error();
  }
};
