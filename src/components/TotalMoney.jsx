/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import makeTotalPrice from '../pages/utils/utils';

export default function TotalMoney({ moneyInfos }) {
  const addUnitNotation = (element, index, array) => {
    const unitPosition = 3;
    const isHighestDigit = index + 1 === array.length;
    const hasUnitNotation = (index + 1) % unitPosition === 0 && !isHighestDigit;

    return hasUnitNotation ? `,${element}` : element;
  };

  const totalPrice = makeTotalPrice(moneyInfos);

  const totalPriveWithUnitNotation = `${totalPrice}`
    .split('')
    .reverse()
    .map((element, index, array) => addUnitNotation(element, index, array))
    .reverse()
    .join('');

  return <span>{`${totalPriveWithUnitNotation}원`}</span>;
}

TotalMoney.propTypes = {
  moneyInfos: PropTypes.array.isRequired,
};
