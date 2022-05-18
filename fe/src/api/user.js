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
  orderProduct(id, inputChanges) {
    return instance({
      url: API.PATCH_ORDER_PRODUCT,
      method: 'patch',
      params: {
        id,
      },
      data: { inputChanges },
    });
  },
};

export default userApi;
