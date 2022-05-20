/* eslint-disable no-use-before-define */
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INSERT':
      return decreaseWalletMoney({ state, price: payload });
    case 'INSERT_INPUT':
      return decreaseWalletMoneyByInput({ state, price: payload });
    case 'REFUND':
      return addRefund2MoneyInfo({ state, price: payload });
    default:
      throw new Error('type을 확인해주세요', type);
  }
};

function decreaseWalletMoney({ state, price }) {
  // const targetMoney = state.find(({ type }) => type === price);
  // const filteredMoney = state.filter(({ type }) => type !== price);

  // const { type } = targetMoney;
  // const num = targetMoney.num - 1;

  // const newMoneyInfos = [...filteredMoney, { type, num }].sort(
  //   (aMoney, bMoney) => aMoney.type - bMoney.type
  // );
  const newMoneyInfos = state.map((money) => {
    const { type, num } = money;
    if (type === price) {
      return { ...money, num: num - 1 };
    }
    return money;
  });

  return newMoneyInfos;
}

function findTargetMoneyInfo(price, infos) {
  return infos.map(({ type, num }) => {
    if (type === price) {
      return {
        type,
        num,
      };
    }
    return {
      type,
      num: 0,
    };
  });
}

function findRefundTargetMoneyInfo(price, infos) {
  let money = price;
  infos.reverse();
  const newInfos = infos.map(({ type }) => {
    const num = Math.floor(money / type);
    money %= type;
    return {
      type,
      num,
    };
  });

  return newInfos;
}

function updateMoneyInfo({ targetInfos, isPlus, infos }) {
  const newInfos = infos.map((info, index) => {
    const { type, num } = targetInfos[index];
    if (info.type === type && num > 0) {
      return {
        type,
        num: isPlus ? info.num + num : info.num - num,
      };
    }

    return { type: info.type, num: info.num };
  });

  return newInfos;
}

function decreaseWalletMoneyByInput({ state, price }) {
  const targetInfos = findTargetMoneyInfo(price, state);
  const newMoneyInfos = updateMoneyInfo({
    targetInfos,
    isPlus: false,
    infos: state,
  });

  return newMoneyInfos;
}

function addRefund2MoneyInfo({ state, price }) {
  const refundMoneyInfo = findRefundTargetMoneyInfo(price, state);
  const newMoneyInfos = updateMoneyInfo({
    targetInfos: refundMoneyInfo,
    isPlus: true,
    infos: state,
  });
  newMoneyInfos.reverse();

  return newMoneyInfos;
}

export default reducer;
