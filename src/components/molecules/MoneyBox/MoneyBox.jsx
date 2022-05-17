import PropTypes from 'prop-types';
import MoneyUnit from 'components/atoms/MoneyUnit/MoneyUnit';
import StyledMoneyBox from './MoneyBox.style';

function MoneyBox({ insertMoney, setInsertMoney }) {
  return (
    <StyledMoneyBox>
      {insertMoney.map(coin => {
        return (
          <MoneyUnit
            key={coin.id}
            coin={coin}
            insertMoney={insertMoney}
            setInsertMoney={setInsertMoney}
          />
        );
      })}
    </StyledMoneyBox>
  );
}

MoneyBox.propTypes = {
  insertMoney: PropTypes.arrayOf(PropTypes.objectOf),
  setInsertMoney: PropTypes.func,
};

export default MoneyBox;
