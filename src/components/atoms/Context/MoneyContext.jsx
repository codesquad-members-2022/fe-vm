import { useState, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';
import initialMoney from 'constants/money';

const MoneyContext = createContext({});

function MoneyProvider({ children }) {
  const [insertMoney, setInsertMoney] = useState(initialMoney);

  const moneyInfo = useMemo(
    () => ({
      insertMoney,
      setInsertMoney,
    }),
    [insertMoney],
  );
  return (
    <MoneyContext.Provider value={moneyInfo}>{children}</MoneyContext.Provider>
  );
}

MoneyProvider.defaultProps = {
  children: <div>Page</div>,
};

MoneyProvider.propTypes = {
  children: PropTypes.element,
};

export { MoneyContext, MoneyProvider };
