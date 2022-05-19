export const styledIsMoneyType = (type) => {
  switch (type) {
    case "coin":
      return "type-coin";

    case "bill":
      return "type-bill";

    default:
      throw new Error("Invalid Money Type");
  }
};

export const styledIsEmptyMoney = (count) => {
  if (count <= 0) {
    return "empty-money";
  }
};

export const styledIsEmptyProduct = (count) => {
  if (count <= 0) {
    return "empty-product";
  }
};

export const styledBePurchase = (price, totalMoney) =>
  price <= totalMoney && "possible-purchase-product";

export const styledTab = () => {};
