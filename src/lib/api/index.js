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
  reduceMoneyQuantity: ({ id, data }) => {
    const url = id ? `${API.WALLET}/${id}` : API.WALLET;
    return patchData({
      url,
      data,
    });
  },
};

export { productsApi, walletApi };
