/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button } from 'components/orderArea/PutBtn.style';
import { PaymentContext } from 'pages/VendingMachine';
import { WalletContext } from 'App';

export default function PutBtn() {
  const [payment, setPayment] = useContext(PaymentContext);
  const [walletState, setWalletState] = useContext(WalletContext);

  const getSumOfUnitCloseToPayment = (sumOfUnit, unit, quantity) => {
    let newSumOfUnit = sumOfUnit;
    let usedAmount = 1;

    while (usedAmount <= quantity) {
      newSumOfUnit += unit;
      if (newSumOfUnit + unit > payment) break;
      usedAmount += 1;
    }

    return { newSumOfUnit, usedAmount };
  };

  const modifyPayment = () => {
    const usedMoney = {};
    const modifiedPayment = walletState.reduceRight((sumOfUnit, { unit, quantity }) => {
      if (sumOfUnit + unit > payment || !quantity) return sumOfUnit;

      const { newSumOfUnit, usedAmount } = getSumOfUnitCloseToPayment(sumOfUnit, unit, quantity);
      usedMoney[unit] = usedAmount;

      return newSumOfUnit;
    }, 0);

    return { modifiedPayment, usedMoney };
  };

  const handlePutBtnClick = () => {
    const { modifiedPayment, usedMoney } = modifyPayment();
    setPayment(modifiedPayment);
  };

  return <Button onClick={handlePutBtnClick}>투입</Button>;
}
