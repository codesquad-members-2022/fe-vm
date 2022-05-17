import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import INITIAL_MONEY from 'constants/money';

const MoneyContext = createContext({});

function MoneyProvider({ children }) {
  const [insertMoney, setInsertMoney] = useState(INITIAL_MONEY);

  function calculateTotalMoney(money) {
    const result = money.reduce((accumulatedMoney, moneyUnit) => {
      const totalMoney = accumulatedMoney + moneyUnit.unit * moneyUnit.count;
      return totalMoney;
    }, 0);
    return result;
  }
  const totalMoney = calculateTotalMoney(insertMoney);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const moneyInfo = { insertMoney, setInsertMoney, totalMoney };
  return (
    <MoneyContext.Provider value={moneyInfo}>{children}</MoneyContext.Provider>
  );
}

MoneyProvider.propTypes = {
  children: PropTypes.element,
};

export { MoneyContext, MoneyProvider };
