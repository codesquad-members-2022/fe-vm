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

  const value = {
    state,
    productDispatch,
    initProduct,
    buyProduct,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

/* Type */
const INIT_PRODUCT = 'initProduct';
const BUY_PRODUCT = 'buyProduct';

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

const buyProduct = (dispatch, selectedId) => {
  dispatch({ type: BUY_PRODUCT, payload: { selectedId } });
};

/* action function */
const initProducts = (_, payload) => {
  return { productData: payload };
};

const buyProducts = (state, payload) => {
  const { productData } = state;
  const { selectedId } = payload;
  const newProductData = productData.map(product => {
    if (product.id !== selectedId) return product;
    return { ...product, stock: product.stock - 1 };
  });
  return { productData: newProductData };
};

/* Reducer */
const reducer = (state, { type, payload }) => actionFunc[type](state, payload);

const actionFunc = {
  [INIT_PRODUCT]: initProducts,
  [BUY_PRODUCT]: buyProducts,
};

export { ProductContext, ProductProvider };
