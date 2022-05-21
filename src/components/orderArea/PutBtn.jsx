import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/orderArea/PutBtn.style';
import { TIME_TO_SELCT_PRODUCT } from 'constant/constant';
import useVMState from 'hooks/useVMState';
import { FinalPayContext, FinalPaySetContext } from 'contexts/FinalPayProvider';
import { HistoryDispatchContext } from 'contexts/HistoryProvider';
import { WalletSetContext } from 'contexts/WalletProvider';

export default function PutBtn({ inputPay }) {
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];
  const { addInputHistory } = useContext(HistoryDispatchContext);
  const { calcPaymentToBeUsed, decreaseUnitsToBeUsed } = useContext(WalletSetContext);
  const { startTimerToReset } = useVMState();

  const handlePutBtnClick = () => {
    const paymentToBeUsed = calcPaymentToBeUsed(inputPay);
    const totalPay = finalPay + paymentToBeUsed.total;
    setFinalPay(totalPay);
    decreaseUnitsToBeUsed(paymentToBeUsed.unitsToBeUsed);
    addInputHistory(totalPay);
    startTimerToReset(totalPay, TIME_TO_SELCT_PRODUCT);
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
