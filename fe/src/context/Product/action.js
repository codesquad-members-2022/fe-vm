import { ADD_TARGET_PRODUCT, GET_PRODUCTS, SUBSTRACT_TARGET_PRODUCT } from './type';

export const getProducts = (dispatch, responseData) =>
  dispatch({ type: GET_PRODUCTS, payload: responseData });

// manager
export const addTargetProduct = (dispatch, responseData) =>
  dispatch({ type: ADD_TARGET_PRODUCT, payload: responseData });

export const substractTargetProduct = (dispatch, responseData) =>
  dispatch({ type: SUBSTRACT_TARGET_PRODUCT, payload: responseData });
