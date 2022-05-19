const getTotalAmount = (walletObj) => {
  const walletArray = Object.entries(walletObj);
  const totalBalance = walletArray.reduce(
    (acc, cur) => acc + Number(cur[0]) * Number(cur[1]),
    0
  );
  return totalBalance;
};

const moneyReducer = (state, action) => {
  const { WALLET, INSERTED, TOTAL_AMOUNT } = state;

  if (action.type === 'INSERT') {
    const changed = { wallet: {}, inserted: {} };

    Object.entries(action.payload).forEach((newMoney) => {
      const [unit, count] = newMoney;
      changed.wallet[unit] = WALLET[unit] - count;
      changed.inserted[unit] = INSERTED[unit] + count;
    });

    const newWallet = { ...WALLET, ...changed.wallet };
    const newInsert = { ...INSERTED, ...changed.inserted };
    const newTotalAmount = getTotalAmount(newInsert);
    return {
      WALLET: newWallet,
      INSERTED: newInsert,
      TOTAL_AMOUNT: newTotalAmount,
    };
  }

  if (action.type === 'WITHDRAW') {
    const changed = { WALLET: {}, INSERTED: {}, TOTAL_AMOUNT: 0 };

    Object.entries(INSERTED).forEach((withdrawed) => {
      const [unit, count] = withdrawed;
      changed.WALLET[unit] = WALLET[unit] + count;
      changed.INSERTED[unit] = 0;
    });

    return changed;
  }

  if (action.type === 'BUY') {
    const changed = {};
    let newTotalAmount = TOTAL_AMOUNT - action.payload;
    Object.keys(INSERTED)
      .reverse()
      .forEach((unit) => {
        changed[`${unit}`] = 0;
        if (newTotalAmount >= unit) {
          const count = Math.floor(newTotalAmount / unit);
          changed[`${unit}`] = count;
          newTotalAmount -= count * unit;
        }
      });

    return {
      ...state,
      INSERTED: changed,
      TOTAL_AMOUNT: TOTAL_AMOUNT - action.payload,
    };
  }
};

const logReducer = (state, action) => {
  if (action.type === 'INSERT') {
    const newLog = `${action.payload}원이 입금되었습니다.`;
    return [...state, newLog];
  }

  if (action.type === 'WITHDRAW') {
    const newLog = `${action.payload}원이 반환되었습니다.`;
    return [...state, newLog];
  }

  if (action.type === 'BUY') {
    const { price, name } = action.payload;
    const newLog = `${name}을 ${price}원으로 구매했습니다.`;
    return [...state, newLog];
  }
};

export { moneyReducer, logReducer };
