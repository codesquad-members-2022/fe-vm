import { API } from 'constant/route';
import instance from './core';

const globalApi = {
  getProducts() {
    return instance({
      url: API.GET_PRODUCTS,
      method: 'get',
    });
  },
  orderProduct(id) {
    return instance({
      url: API.PATCH_ORDER_PRODUCT,
      method: 'patch',
      params: {
        id,
      },
    });
  },
};

export default globalApi;
