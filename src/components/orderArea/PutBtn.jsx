/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/orderArea/PutBtn.style';
import { FinalPayContext } from 'pages/VendingMachine';
import { WalletContext } from 'App';

export default function PutBtn({ inputPay }) {
  const [finalPay, setFinalPay] = useContext(FinalPayContext);
  const [walletState] = useContext(WalletContext);

  const getSumOfUnitCloseToPayment = (sumOfUnit, unit, quantity) => {
    let newSumOfUnit = sumOfUnit;
    let usedAmount = 1;

    while (usedAmount <= quantity) {
      newSumOfUnit += unit;
      if (newSumOfUnit + unit > inputPay) break;
      usedAmount += 1;
    }

    return { newSumOfUnit, usedAmount };
  };

  const modifyPayment = () => {
    const usedMoney = {};
    const modifiedPayment = walletState.reduceRight((sumOfUnit, { unit, quantity }) => {
      if (sumOfUnit + unit > inputPay || !quantity) return sumOfUnit;

      const { newSumOfUnit, usedAmount } = getSumOfUnitCloseToPayment(sumOfUnit, unit, quantity);
      usedMoney[unit] = usedAmount;

      return newSumOfUnit;
    }, 0);

    return { modifiedPayment, usedMoney };
  };

  const handlePutBtnClick = () => {
    const { modifiedPayment, usedMoney } = modifyPayment();
    setFinalPay(modifiedPayment);
  };

  return <Button onClick={handlePutBtnClick}>투입</Button>;
}

PutBtn.propTypes = {
  inputPay: PropTypes.number
};

PutBtn.defaultProps = {
  inputPay: 0
};
