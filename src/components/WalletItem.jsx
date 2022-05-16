/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function WalletItem({ icon, won, num, onClick }) {
  return (
    <li>
      <Button icon={icon} onClick={() => onClick(won)} />
      <span>{`${num}개`}</span>
    </li>
  );
}

WalletItem.propTypes = {
  icon: PropTypes.string.isRequired,
  won: PropTypes.number,
  num: PropTypes.number,
  onClick: PropTypes.func,
};
