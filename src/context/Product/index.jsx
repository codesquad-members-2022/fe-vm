import React, { createContext, useEffect, useReducer } from 'react';
import reducer from 'context/Product/reducer';
import { dispatchAction } from './action';

const initState = { productData: [] };
const ProductContext = createContext(initState);

const ProductProvider = ({ children }) => {
  const [state, productDispatch] = useReducer(reducer, initState);
  const { initProduct } = dispatchAction;

  useEffect(() => {
    initProduct(productDispatch);
  }, []);

  const value = {
    state,
    productDispatch,
    ...dispatchAction,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductProvider };
