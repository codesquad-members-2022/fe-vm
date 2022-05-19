import { API } from 'constant/route';
import instance from './core';

const productApi = {
  getProducts() {
    return instance({
      url: API.GET_PRODUCTS,
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

export default productApi;
