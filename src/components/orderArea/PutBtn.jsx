import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/orderArea/PutBtn.style';
import { addCommasToNumber } from 'utils/util';
import { FinalPayContext, FinalPaySetContext } from 'Context/FinalPayProvider';
import { HistoryDispatchContext } from 'Context/HistoryProvider';
import { VMTimerSetContext } from 'Context/VMTimerProvider';
import { WalletContext } from 'Context/WalletProvider';

const TIME_TO_SELCT_PRODUCT = 5000;

export default function PutBtn({ inputPay }) {
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];
  const walletState = useContext(WalletContext);
  const { addInputHistory } = useContext(HistoryDispatchContext);
  const startVMTimer = useContext(VMTimerSetContext);

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
    addInputHistory(addCommasToNumber(finalPay + modifiedPayment));
    startVMTimer(() => {}, TIME_TO_SELCT_PRODUCT); // TODO: 돈 반환
  };

  return (
    <Button onClick={handlePutBtnClick} disabled={!inputPay}>
      투입
    </Button>
  );
}

PutBtn.propTypes = {
  inputPay: PropTypes.number
};

PutBtn.defaultProps = {
  inputPay: 0
};
