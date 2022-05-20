import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { INPUT_MONEY, WALLET_MONEY } from 'constants/money';

const MoneyContext = createContext({});

function MoneyProvider({ children }) {
  const [insertMoney, setInsertMoney] = useState(INPUT_MONEY);
  const [walletMoney, setWalletMoney] = useState(WALLET_MONEY);

  function calculateTotalMoney(money) {
    const result = money.reduce((accumulatedMoney, moneyUnit) => {
      const totalMoney = accumulatedMoney + moneyUnit.unit * moneyUnit.count;
      return totalMoney;
    }, 0);
    return result;
  }

  function updateWalletMoney(coinId, actionType, coinCount) {
    const updatedWalletMoney = walletMoney.map(money => {
      if (money.id === coinId) {
        const increasedMoney = {
          id: money.id,
          unit: money.unit,
          count: money.count + coinCount,
        };
        const decreasedMoney = {
          id: money.id,
          unit: money.unit,
          count: money.count - coinCount,
        };
        const updatedMoney =
          actionType === 'increment' ? increasedMoney : decreasedMoney;
        return updatedMoney;
      }
      return money;
    });
    setWalletMoney(updatedWalletMoney);
  }

  function updateInsertedMoney(coinId, actionType, coinCount) {
    const updatedInsertedMoney = insertMoney.map(money => {
      if (money.id === coinId) {
        const increasedMoney = {
          id: money.id,
          unit: money.unit,
          count: money.count + coinCount,
        };
        const decreasedMoney = {
          id: money.id,
          unit: money.unit,
          count: money.count - coinCount,
        };
        const updatedMoney =
          actionType === 'increment' ? increasedMoney : decreasedMoney;
        return updatedMoney;
      }
      return money;
    });
    setInsertMoney(updatedInsertedMoney);
  }

  const totalInsertMoney = calculateTotalMoney(insertMoney);
  const totalWalletMoney = calculateTotalMoney(walletMoney);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const moneyInfo = {
    insertMoney,
    setInsertMoney,
    walletMoney,
    setWalletMoney,
    updateInsertedMoney,
    updateWalletMoney,
    calculateTotalMoney,
    totalInsertMoney,
    totalWalletMoney,
  };
  return (
    <MoneyContext.Provider value={moneyInfo}>{children}</MoneyContext.Provider>
  );
}

MoneyProvider.propTypes = {
  children: PropTypes.element,
};

export { MoneyContext, MoneyProvider };
