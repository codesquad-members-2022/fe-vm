import mangerApi from 'api/manger';
import userApi from 'api/user';
import {
  ADD_TARGET_BALANCE,
  INSERT_CHANGES,
  ORDER_PRODUCT,
  RETURN_CHANGES,
  SUBSTRACT_TARGET_BALANCE,
  USER_LOGIN,
  USER_LOGOUT,
} from './type';

// global
export const requestLogin = async dispatch => {
  const response = await userApi.login();
  dispatch({ type: USER_LOGIN, payload: response.data });
};
export const requestLogout = async dispatch => {
  const response = await userApi.logout();
  dispatch({ type: USER_LOGOUT });
};

// user
export const insertChanges = (dispatch, id, submitOnlyNumber) => {
  dispatch({ type: INSERT_CHANGES, payload: { unitId: id, submitOnlyNumber } });
};

export const returnChanges = dispatch => {
  dispatch({ type: RETURN_CHANGES });
};

export const orderProduct = async (dispatch, productId, inputChanges) => {
  const response = await userApi.orderProduct(productId, inputChanges);
  dispatch({ type: ORDER_PRODUCT, payload: response.data });
};

// manager
export const addTargetBalance = async (dispatch, id) => {
  const response = await mangerApi.addTargetBalance(id);
  dispatch({ type: ADD_TARGET_BALANCE, payload: response.data });
};

export const substractTargetBalance = async (dispatch, id) => {
  const response = await mangerApi.substractTargetBalance(id);
  dispatch({ type: SUBSTRACT_TARGET_BALANCE, payload: response.data });
};
