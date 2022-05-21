import { API } from 'constant/route';
import instance from './core';

const userApi = {
  login() {
    return instance({
      url: API.LOGIN,
      method: 'get',
    });
  },
  logout() {
    return instance({
      url: API.LOGOUT,
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
};

export default userApi;
