/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import WalletItem from './WalletItem';

export default function WalletItemList({ moneyInfo, onClickMoney }) {
  return (
    <ul>
      {moneyInfo.map(({ money, num }) => (
        <WalletItem
          key={`money-${money}`}
          icon={`${money}원 `}
          money={money}
          num={num}
          onClick={() => onClickMoney(money, num)}
        />
      ))}
    </ul>
  );
}

WalletItemList.propTypes = {
  moneyInfo: PropTypes.array.isRequired,
  onClickMoney: PropTypes.func,
};
