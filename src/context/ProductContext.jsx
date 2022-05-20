import { createContext, useContext, useReducer } from 'react';
import PRODUCTS_LIST from 'mock/Products';
import { useCallback } from 'react';
import { useLogState } from './LogContext';

const initState = PRODUCTS_LIST;

export const ProductsContext = createContext(initState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>{children}</ProductsContext.Provider>
  );
};

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'STOCK_CONSUME':
      const updateStock = state.map(product => {
        return product.name === action.payload ? { ...product, stock: product.stock - 1 } : product;
      });
      return updateStock;
    default:
      throw new Error();
  }
};

export function useProductsState() {
  const { state, dispatch } = useContext(ProductsContext);
  const { dropProductLog } = useLogState();

  if (!state) throw new Error();

  const stockConsume = useCallback(product => {
    dispatch({
      type: 'STOCK_CONSUME',
      payload: product,
    });
    setTimeout(() => {
      dropProductLog(product);
    }, 2000);
  }, []);

  return {
    productsList: state,
    stockConsume,
  };
}
