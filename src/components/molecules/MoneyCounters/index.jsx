import React from 'react';

import PropTypes from 'prop-types';

import MoneyCounter from '@components/molecules/MoneyCounter';
import * as S from '@components/molecules/MoneyCounters/MoneyCounters.style';

const MoneyCounters = ({ wallet, changeMoneyQuantity }) => {
  return (
    <S.Container>
      {wallet.map(money => (
        <MoneyCounter
          key={money.id}
          money={money}
          changeMoneyQuantity={changeMoneyQuantity(money.id)}
        />
      ))}
    </S.Container>
  );
};

MoneyCounters.propTypes = {
  wallet: PropTypes.array,
  changeMoneyQuantity: PropTypes.func,
};

export default MoneyCounters;
