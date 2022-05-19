import { useContext } from 'react';
import { TIME_TO_RESET_HISTORY } from 'constant/constant';
import { FinalPaySetContext } from 'contexts/FinalPayProvider';
import { SelectedProductSetContext } from 'contexts/SelectedProductProvider';
import { HistoryDispatchContext } from 'contexts/HistoryProvider';
import { VMTimerSetContext } from 'contexts/VMTimerProvider';

export default function useVMState() {
  const setFinalPay = useContext(FinalPaySetContext);
  const setSelectedProduct = useContext(SelectedProductSetContext);
  const { returnPayHistory, resetHistory } = useContext(HistoryDispatchContext);
  const { startVMTimer, stopVMTimer } = useContext(VMTimerSetContext);

  const resetVMState = totalPay => {
    setFinalPay(0);
    setSelectedProduct({ detail: null, price: null });
    returnPayHistory(totalPay);
  };

  const returnPay = (totalPay, time) => {
    stopVMTimer();
    startVMTimer([
      [() => resetVMState(totalPay), time],
      [resetHistory, TIME_TO_RESET_HISTORY]
    ]);
  };

  return { resetVMState, returnPay };
}
