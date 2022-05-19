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

const walletApi = {
  getAllMoney: () => getData(API.WALLET),
  reduceMoneyQuantity: ({ id, data }) =>
    patchData({
      url: `${API.WALLET}/${id}`,
      data,
    }),
};

export { productsApi, walletApi };
