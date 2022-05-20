import { DRINK_API, INVESTMENT_API, MANAGER_MODE_KEYS, WALLET_API } from "Helper/constant";
import { fetchData, getAPIById, getRandomNumber } from "Helper/utils";
import { MOCK_DATA } from "Helper/mock";

export const handleManager = async ({ key }) => {
  if (!MANAGER_MODE_KEYS.includes(key)) {
    return;
  }

  if (key === "1") {
    chargeStock();
  }

  if (key === "5") {
    chargeCash();
  }

  if (key === "3") {
    resetDataBase();
  }
};

const chargeCash = async () => {
  const walletMoney = await fetchData(WALLET_API);
  Object.entries(walletMoney.amount).map(([coin, cnt]) => {
    const coinUpCount = getRandomNumber(0, 3);
    walletMoney.amount[coin] = cnt + coinUpCount;
  });
  await fetchData(WALLET_API, { method: "PUT", bodyData: walletMoney });
};

const chargeStock = async () => {
  const beverageDatas = await fetchData(DRINK_API);
  beverageDatas.map(async (beverageData) => {
    const cnt = getRandomNumber(1, 3);
    const { id } = beverageData;
    beverageData.stock += cnt;
    const api = getAPIById(DRINK_API, id);
    await fetchData(api, { method: "PUT", bodyData: beverageData });
  });
};

const resetDataBase = async () => {
  const { beverages, money } = MOCK_DATA;
  const [walletMoney, investment] = money;
  beverages.forEach(async (beverageData) => {
    const { id } = beverageData;
    const api = getAPIById(DRINK_API, id);
    await fetchData(api, { method: "PUT", bodyData: beverageData });
  });
  await fetchData(WALLET_API, { method: "PUT", bodyData: walletMoney });
  await fetchData(INVESTMENT_API, { method: "PUT", bodyData: investment });
};
