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
export const requestLogin = (dispatch, responseData) =>
  dispatch({ type: USER_LOGIN, payload: responseData });

export const requestLogout = dispatch => dispatch({ type: USER_LOGOUT });

// user
export const insertChanges = (dispatch, id, submitOnlyNumber) =>
  dispatch({ type: INSERT_CHANGES, payload: { unitId: id, submitOnlyNumber } });

export const returnChanges = dispatch => dispatch({ type: RETURN_CHANGES });

export const orderProduct = (dispatch, responseData) =>
  dispatch({ type: ORDER_PRODUCT, payload: responseData });

// manager
export const addTargetBalance = (dispatch, responseData) =>
  dispatch({ type: ADD_TARGET_BALANCE, payload: responseData });

export const substractTargetBalance = (dispatch, responseData) =>
  dispatch({ type: SUBSTRACT_TARGET_BALANCE, payload: responseData });
