import { useContext } from 'react';
import { FinalPaySetContext } from 'contexts/FinalPayProvider';
import { SelectedProductSetContext } from 'contexts/SelectedProductProvider';
import { HistoryDispatchContext } from 'contexts/HistoryProvider';

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
