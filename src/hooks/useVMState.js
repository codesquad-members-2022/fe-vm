import { useContext } from 'react';
import { FinalPaySetContext } from 'Context/FinalPayProvider';
import { SelectedProductSetContext } from 'Context/SelectedProductProvider';
import { HistoryDispatchContext } from 'Context/HistoryProvider';

export default function useVMState() {
  const setFinalPay = useContext(FinalPaySetContext);
  const setSelectedProduct = useContext(SelectedProductSetContext);
  const { returnPayHistory } = useContext(HistoryDispatchContext);

  const resetVMState = totalPay => {
    setFinalPay(0);
    setSelectedProduct({ detail: null, price: null });
    returnPayHistory(totalPay);
  };

  return { resetVMState };
}
