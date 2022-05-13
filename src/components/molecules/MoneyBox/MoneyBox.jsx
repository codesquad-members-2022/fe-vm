// import PropTypes from 'prop-types';
import { useContext } from 'react';
import MoneyContext from 'components/atoms/Context/MoneyContext';
import MoneyUnit from 'components/atoms/MoneyUnit/MoneyUnit';
import StyledMoneyBox from './MoneyBox.style';

function MoneyBox() {
  const { insertMoney, setInsertMoney } = useContext(MoneyContext);
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

// MoneyBox.defaultProps = {
//   insertMoney: [],
//   setInsertMoney: () => {},
// };

// MoneyBox.propTypes = {
//   insertMoney: PropTypes.arrayOf(PropTypes.objectOf),
//   setInsertMoney: PropTypes.func,
// };

export default MoneyBox;
