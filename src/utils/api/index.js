import instance from "./instance";

export const API = {
  getBeverage(config) {
    return instance({
      url: "beverageData.json",
      method: "get",
      ...config,
    });
  },
  getMyWallet(config) {
    return instance({
      url: "moneyData.json",
      method: "get",
      ...config,
    });
  },
};
