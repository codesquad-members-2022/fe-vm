/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function WalletItem({ icon, money, num, onClick }) {
  return (
    <li>
      <Button icon={icon} onClick={() => onClick(money)} />
      <span>{`${num}개`}</span>
    </li>
  );
}

WalletItem.propTypes = {
  icon: PropTypes.string.isRequired,
  money: PropTypes.number,
  num: PropTypes.number,
  onClick: PropTypes.func,
};
