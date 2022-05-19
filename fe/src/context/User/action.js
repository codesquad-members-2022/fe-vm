import {
  ADD_TARGET_BALANCE,
  INSERT_CHANGES,
  ORDER_PRODUCT,
  RETURN_CHANGES,
  SUBSTRACT_TARGET_BALANCE,
  USER_LOGIN,
  USER_LOGOUT,
} from './type';

// FIXME: dispatch type으로도 충분히 어떤 action인지 유추할 수 있을 거라 생각되는데요! 도리가 느낀 이 방법의 장점은 무엇이었는지 궁금하네요!😄

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
