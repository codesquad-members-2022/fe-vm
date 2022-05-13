import PropTypes from 'prop-types';

function MoneyUnit({ coin, insertMoney, setInsertMoney }) {
  function handleMoneyUnit(event) {
    event.preventDefault();
    if (coin.count === 0) {
      return;
    }

    const updatedInsertMoney = insertMoney.map(money => {
      if (money.id === coin.id) {
        const updatedMoney = {
          id: coin.id,
          unit: coin.unit,
          count: coin.count - 1,
        };
        return updatedMoney;
      }
      return money;
    });
    setInsertMoney(updatedInsertMoney);
  }
  return (
    <li key={coin.id}>
      <button
        type="button"
        onClick={handleMoneyUnit}
        onKeyDown={handleMoneyUnit}
      >
        {coin.unit}
      </button>
      <span>{coin.count}</span>
    </li>
  );
}

MoneyUnit.defaultProps = {
  coin: {},
  insertMoney: [],
  setInsertMoney: () => {},
};

MoneyUnit.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    unit: PropTypes.number,
    count: PropTypes.number,
  }),
  insertMoney: PropTypes.arrayOf(PropTypes.objectOf),
  setInsertMoney: PropTypes.func,
};

export default MoneyUnit;
