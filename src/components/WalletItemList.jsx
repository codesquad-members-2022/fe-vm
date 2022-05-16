/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import WalletItem from './WalletItem';

export default function WalletItemList({ moneyInfo, onClickWon }) {
  return (
    <ul>
      {moneyInfo.map(({ won, num }) => (
        <WalletItem
          key={`money-${won}`}
          icon={`${won}원 `}
          won={won}
          num={num}
          onClick={() => onClickWon(won, num)}
        />
      ))}
    </ul>
  );
}

WalletItemList.propTypes = {
  moneyInfo: PropTypes.array.isRequired,
  onClickWon: PropTypes.func,
};
