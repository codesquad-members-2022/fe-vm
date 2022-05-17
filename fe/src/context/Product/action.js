import globalApi from 'api/globalApi';
import mangerApi from 'api/manger';
import { ADD_TARGET_PRODUCT, GET_PRODUCTS, SUBSTRACT_TARGET_PRODUCT } from './type';

export const getProducts = async dispatch => {
  const response = await globalApi.getProducts();
  dispatch({ type: GET_PRODUCTS, payload: response.data });
};

// manager
export const addTargetProduct = async (dispatch, id) => {
  const response = await mangerApi.addTargetProduct(id);
  dispatch({ type: ADD_TARGET_PRODUCT, payload: response.data });
};

export const substractTargetProduct = async (dispatch, id) => {
  const response = await mangerApi.substractTargetProduct(id);
  dispatch({ type: SUBSTRACT_TARGET_PRODUCT, payload: response.data });
};
