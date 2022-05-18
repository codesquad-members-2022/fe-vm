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

  // if (action.type === 'INPUT') {
  //   for (const unit in action.newState) {
  //     state[unit] -= action.newState[unit];
  //   }
  //   console.log({ ...state });
  //   return { ...state };
  // }   // 두번 실행되는 코드 // 왤까?.

  if (action.type === 'INSERT') {
    const changed = { WALLET: {}, INSERTED: {} };
    for (const unit in action.newState) {
      changed.WALLET[unit] = WALLET[unit] - action.newState[unit];
      changed.INSERTED[unit] = INSERTED[unit] + action.newState[unit];
    }

    const newWALLET = { ...WALLET, ...changed.WALLET };
    const newINSERT = { ...INSERTED, ...changed.INSERTED };
    const newTOTAL_AMOUNT = getTotalAmount(newINSERT);
    return {
      WALLET: newWALLET,
      INSERTED: newINSERT,
      TOTAL_AMOUNT: newTOTAL_AMOUNT,
    };
  }

  if (action.type === 'WITHDRAW') {
    const changed = { WALLET: {}, INSERTED: {}, TOTAL_AMOUNT: 0 };
    for (const unit in INSERTED) {
      changed.WALLET[unit] = WALLET[unit] + INSERTED[unit];
      changed.INSERTED[unit] = 0;
    }

    return changed;
  }
};

const logReducer = (state, action) => {
  if (action.type === 'INSERT') {
    const newLog = `${action.newAmount}원이 입금되었습니다.`;
    return [...state, newLog];
  }

  if (action.type === 'WITHDRAW') {
    const newLog = `${action.newAmount}원이 반환되었습니다.`;
    return [...state, newLog];
  }
};

export { moneyReducer, logReducer };
