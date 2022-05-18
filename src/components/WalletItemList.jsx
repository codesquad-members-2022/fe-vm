/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import WalletItem from './WalletItem';

export default function WalletItemList({ moneyInfos, onClickMoney }) {
  return (
    <ul>
      {moneyInfos.map(({ type, num }) => (
        <WalletItem
          key={`money-${type}`}
          icon={`${type}원 `}
          type={type}
          num={num}
          onClick={() => onClickMoney(type, num)}
        />
      ))}
    </ul>
  );
}

WalletItemList.propTypes = {
  moneyInfos: PropTypes.array.isRequired,
  onClickMoney: PropTypes.func,
};
