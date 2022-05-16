/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function TotalMoney({ moneyInfo }) {
  const addUnitNotation = (element, index, array) => {
    const unitPosition = 3;
    const isHighestDigit = index + 1 === array.length;
    const hasUnitNotation = (index + 1) % unitPosition === 0 && !isHighestDigit;

    return hasUnitNotation ? `,${element}` : element;
  };

  const toatlPrice = moneyInfo
    .map(({ money, num }) => money * num)
    .reduce((aMoney, bMoney) => aMoney + bMoney);

  const totalPriveWithUnitNotation = `${toatlPrice}`
    .split('')
    .reverse()
    .map((element, index, array) => addUnitNotation(element, index, array))
    .reverse()
    .join('');

  return <span>{`${totalPriveWithUnitNotation}원`}</span>;
}

TotalMoney.propTypes = {
  moneyInfo: PropTypes.array.isRequired,
};
