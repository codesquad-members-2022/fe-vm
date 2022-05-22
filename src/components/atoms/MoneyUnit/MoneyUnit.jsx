import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MoneyContext } from 'context/MoneyContext';

function MoneyUnit({ coin }) {
  const { updateInsertedMoney, updateWalletMoney } = useContext(MoneyContext);

  function handleMoneyUnit(event) {
    event.preventDefault();
    if (coin.count === 0) {
      return;
    }
    const coinId = event.target.id;
    updateWalletMoney(coinId, 'decrement', 1);
    updateInsertedMoney(coinId, 'increment', 1);
  }

  return (
    <li key={coin.id}>
      <button
        type="button"
        id={coin.id}
        onClick={handleMoneyUnit}
        onKeyDown={handleMoneyUnit}
      >
        {coin.unit}
      </button>
      <span>{`X ${coin.count}`}</span>
    </li>
  );
}

MoneyUnit.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    unit: PropTypes.number,
    count: PropTypes.number,
  }),
};

export default MoneyUnit;
