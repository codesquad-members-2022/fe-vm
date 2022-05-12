import { API } from 'constant/route';
import instance from './core';

const productApi = {
  getProducts() {
    return instance({
      url: API.GET_PRODUCTS,
      method: 'get',
    });
  },
};

export default productApi;
