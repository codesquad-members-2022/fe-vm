import mangerApi from 'api/manger';
import userApi from 'api/user';
import {
  ADD_TARGET_BALANCE,
  ADD_TARGET_PRODUCT,
  GET_BALANCE,
  GET_PRODUCTS,
  INSERT_CHANGES,
  ORDER_PRODUCT,
  RETURN_CHANGES,
  SUBSTRACT_TARGET_BALANCE,
  SUBSTRACT_TARGET_PRODUCT,
} from './type';

export const insertChanges = (dispatch, id) => {
  dispatch({ type: INSERT_CHANGES, payload: id });
};

export const returnChanges = dispatch => {
  dispatch({ type: RETURN_CHANGES });
};

export const getProducts = async dispatch => {
  const response = await userApi.getProducts();
  dispatch({ type: GET_PRODUCTS, payload: response.data });
};

export const orderProduct = async (dispatch, id) => {
  const response = await userApi.orderProduct(id);
  dispatch({ type: ORDER_PRODUCT, payload: response.data });
};

export const getBalance = async dispatch => {
  const response = await mangerApi.getBalance();
  dispatch({ type: GET_BALANCE, payload: response.data });
};

export const addTargetProduct = async (dispatch, id) => {
  const response = await mangerApi.addTargetProduct(id);
  dispatch({ type: ADD_TARGET_PRODUCT, payload: response.data });
};

export const substractTargetProduct = async (dispatch, id) => {
  const response = await mangerApi.substractTargetProduct(id);
  dispatch({ type: SUBSTRACT_TARGET_PRODUCT, payload: response.data });
};

export const addTargetBalance = async (dispatch, id) => {
  const response = await mangerApi.addTargetBalance(id);
  dispatch({ type: ADD_TARGET_BALANCE, payload: response.data });
};

export const substractTargetBalance = async (dispatch, id) => {
  const response = await mangerApi.substractTargetBalance(id);
  dispatch({ type: SUBSTRACT_TARGET_BALANCE, payload: response.data });
};
