/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function WalletItem({ icon, type, num, onClick }) {
  return (
    <li>
      <Button icon={icon} onClick={() => onClick(type)} />
      <span>{`${num}개`}</span>
    </li>
  );
}

WalletItem.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.number,
  num: PropTypes.number,
  onClick: PropTypes.func,
};
