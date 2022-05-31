/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import makeTotalPrice from '../pages/utils/utils';

export default function TotalMoney({ moneyInfos }) {
  const totalPrice = makeTotalPrice(moneyInfos);

  return <span>{`${totalPrice.toLocaleString('en')}원`}</span>;
}

TotalMoney.propTypes = {
  moneyInfos: PropTypes.array.isRequired,
};
