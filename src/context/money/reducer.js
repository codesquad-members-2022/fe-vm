export const init = initialState => initialState;

const getNewInsertedMoney = (wallet, newMoney, insertedMoney) => {
  return newMoney.reduce((total, { id, unit, quantity }) => {
    const prevQuantity = wallet.find(money => money.id === id).quantity;
    return (total += unit * (prevQuantity - quantity));
  }, insertedMoney);
};

const getNewWallet = (wallet, newMoney) => {
  const getUpdatedMoney = id => newMoney.find(money => money.id === id);
  return wallet.map(money => getUpdatedMoney(money.id) || money);
};

const MoneyReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INIT_MONEY': {
      return init(payload);
    }
    case 'INSERT_MONEY': {
      const { wallet, insertedMoney } = state;
      const newInsertedMoney = getNewInsertedMoney(wallet, payload.updatedMoney, insertedMoney);
      const newWallet = getNewWallet(wallet, payload.updatedMoney);
      return { insertedMoney: newInsertedMoney, wallet: newWallet };
    }
    case 'SPEND_MONEY': {
      const { insertedMoney } = state;
      const newInsertedMoney = insertedMoney - payload.productPrice;
      return { ...state, insertedMoney: newInsertedMoney };
    }
  }
};

export default MoneyReducer;
