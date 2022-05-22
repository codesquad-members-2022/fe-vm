import { getProductsData, getWalletData } from 'api';
import API_URL from 'constants/apiUrl';
import getMockData from 'mock';
import React, { createContext, useEffect, useReducer } from 'react';

/* Provider */
const initState = { productData: [] };
const ProductContext = createContext(initState);

const ProductProvider = ({ children }) => {
  const [state, productDispatch] = useReducer(reducer, initState);

  useEffect(() => {
    initProduct(productDispatch);
  }, []);

  return <ProductContext.Provider value={{ state, productDispatch }}>{children}</ProductContext.Provider>;
};

/* Type */
const INIT_PRODUCT = 'initProduct';

/* Dispatch Function */
const initProduct = async dispatch => {
  let productData;
  try {
    productData = await getProductsData();
  } catch (error) {
    const { products } = API_URL;
    productData = getMockData(products);
  }

  dispatch({ type: INIT_PRODUCT, payload: productData });
};

/* action function */
const initProducts = (_, payload) => {
  return { productData: payload };
};

/* Reducer */
const reducer = (state, { type, payload }) => actionFunc[type](state, payload);

const actionFunc = {
  [INIT_PRODUCT]: initProducts,
};

export { ProductContext, ProductProvider };
