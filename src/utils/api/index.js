import instance from "./instance";

export const API = {
  getBeverage() {
    return instance({
      url: "beverage",
      method: "get",
    });
  },
  getMyWallet() {
    return instance({
      url: "myWallet",
      method: "get",
    });
  },
};
