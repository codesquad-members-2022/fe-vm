import instance from "./instance";

export const API = {
  getBeverage(config) {
    return instance({
      url: "beverage",
      method: "get",
      ...config,
    });
  },
  getMyWallet(config) {
    return instance({
      url: "mocks/myWallet",
      method: "get",
      ...config,
    });
  },
};
