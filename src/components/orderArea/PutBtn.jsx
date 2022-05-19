import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/orderArea/PutBtn.style';
import { TIME_TO_SELCT_PRODUCT, TIME_TO_RESET_HISTORY } from 'constant/constant';
import useVMState from 'hooks/useVMState';
import { FinalPayContext, FinalPaySetContext } from 'contexts/FinalPayProvider';
import { HistoryDispatchContext } from 'contexts/HistoryProvider';
import { VMTimerSetContext } from 'contexts/VMTimerProvider';
import { WalletContext } from 'contexts/WalletProvider';

export default function PutBtn({ inputPay }) {
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];
  const { addInputHistory, resetHistory } = useContext(HistoryDispatchContext);
  const walletState = useContext(WalletContext);
  const { startVMTimer, stopVMTimer } = useContext(VMTimerSetContext);
  const { resetVMState } = useVMState();

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

  const StartTimerToSelectProduct = totalPay => {
    stopVMTimer();
    startVMTimer([
      [() => resetVMState(totalPay), TIME_TO_SELCT_PRODUCT],
      [resetHistory, TIME_TO_RESET_HISTORY]
    ]);
  };

  const handlePutBtnClick = () => {
    const modifiedPayment = modifyPayment();
    const totalPay = finalPay + modifiedPayment;
    setFinalPay(totalPay);
    addInputHistory(totalPay);
    StartTimerToSelectProduct(totalPay);
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
