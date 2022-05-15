import { API } from 'constant/route';
import instance from './core';

const mangerApi = {
  getBalance() {
    return instance({
      url: API.GET_BALANCE,
      method: 'get',
    });
  },
  addTargetBalance(id) {
    return instance({
      url: API.PATCH_ADD_BALANCE,
      method: 'patch',
      params: {
        id,
      },
    });
  },
  substractTargetBalance(id) {
    return instance({
      url: API.PATCH_SUBSTRACT_BALANCE,
      method: 'patch',
      params: {
        id,
      },
    });
  },
  addTargetProduct(id) {
    return instance({
      url: API.PATCH_ADD_PRODUCT,
      method: 'patch',
      params: {
        id,
      },
    });
  },
  substractTargetProduct(id) {
    return instance({
      url: API.PATCH_SUBSTRACT_PRODUCT,
      method: 'patch',
      params: {
        id,
      },
    });
  },
};

export default mangerApi;
