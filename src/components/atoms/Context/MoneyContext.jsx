import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import INITIAL_MONEY from 'constants/money';

const MoneyContext = createContext({});

function MoneyProvider({ children }) {
  const [insertMoney, setInsertMoney] = useState(INITIAL_MONEY);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const moneyInfo = { insertMoney, setInsertMoney };
  return (
    <MoneyContext.Provider value={moneyInfo}>{children}</MoneyContext.Provider>
  );
}

MoneyProvider.propTypes = {
  children: PropTypes.element,
};

export { MoneyContext, MoneyProvider };
