import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/orderArea/PutBtn.style';
import { FinalPayContext, FinalPaySetContext } from 'Context/FinalPayProvider';
import { WalletContext } from 'Context/WalletProvider';

export default function PutBtn({ inputPay, startTimerToSelectProduct }) {
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];
  const walletState = useContext(WalletContext);

  const getSumOfUnitCloseToPayment = (sumOfUnit, unit, quantity) => {
    let newSumOfUnit = sumOfUnit;
    let usedAmount = 1;

    while (usedAmount <= quantity) {
      newSumOfUnit += unit;
      if (newSumOfUnit + unit > inputPay) break;
      usedAmount += 1;
    }

    return newSumOfUnit;
  };

  const modifyPayment = () => {
    const modifiedPayment = walletState.reduceRight((sumOfUnit, { unit, quantity }) => {
      if (sumOfUnit + unit > inputPay || !quantity) return sumOfUnit;

      const newSumOfUnit = getSumOfUnitCloseToPayment(sumOfUnit, unit, quantity);

      return newSumOfUnit;
    }, 0);

    return modifiedPayment;
  };

  const handlePutBtnClick = () => {
    const modifiedPayment = modifyPayment();
    setFinalPay(finalPay + modifiedPayment);
    startTimerToSelectProduct();
  };

  return (
    <Button onClick={handlePutBtnClick} disabled={!inputPay}>
      투입
    </Button>
  );
}

PutBtn.propTypes = {
  inputPay: PropTypes.number,
  startTimerToSelectProduct: PropTypes.func
};

PutBtn.defaultProps = {
  inputPay: 0,
  startTimerToSelectProduct: () => {}
};
