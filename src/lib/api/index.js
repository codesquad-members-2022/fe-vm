import { API } from '@constants';
import { getData, patchData } from '@lib/api/core';

const productsApi = {
  getAllProducts: () => getData(API.PRODUCTS),
  reduceProductQuantity: ({ id, data }) =>
    patchData({
      url: `${API.PRODUCTS}/${id}`,
      data,
    }),
};

export { productsApi };
