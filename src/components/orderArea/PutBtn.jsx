import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/orderArea/PutBtn.style';
import { TIME_TO_SELCT_PRODUCT } from 'constant/constant';
import { calcPaymentToBeUsed } from 'utils/util';
import useVMState from 'hooks/useVMState';
import useWalletState from 'hooks/useWalletState';
import { FinalPayContext, FinalPaySetContext } from 'contexts/FinalPayProvider';
import { HistoryDispatchContext } from 'contexts/HistoryProvider';
import { WalletContext } from 'contexts/WalletProvider';

export default function PutBtn({ inputPay }) {
  const [finalPay, setFinalPay] = [useContext(FinalPayContext), useContext(FinalPaySetContext)];
  const { addInputHistory } = useContext(HistoryDispatchContext);
  const walletState = useContext(WalletContext);
  const { startTimerToReset } = useVMState();
  const { decreaseUnitsToBeUsed } = useWalletState();

  const handlePutBtnClick = () => {
    const paymentToBeUsed = calcPaymentToBeUsed(walletState, inputPay);
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
