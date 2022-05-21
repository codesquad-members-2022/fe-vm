import { ADD_TARGET_PRODUCT, GET_PRODUCTS, SELECT_PRODUCT, SUBSTRACT_TARGET_PRODUCT } from './type';

// global
export const getProducts = (dispatch, responseData) =>
  dispatch({ type: GET_PRODUCTS, payload: responseData });

export const selectProduct = (dispatch, responseData) =>
  dispatch({ type: SELECT_PRODUCT, payload: responseData });

// manager
export const addTargetProduct = (dispatch, responseData) =>
  dispatch({ type: ADD_TARGET_PRODUCT, payload: responseData });

export const substractTargetProduct = (dispatch, responseData) =>
  dispatch({ type: SUBSTRACT_TARGET_PRODUCT, payload: responseData });
