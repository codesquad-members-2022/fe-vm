import React, { useContext } from 'react';
import { Button } from 'components/orderArea/ReturnBtn.style';
import { FinalPayContext } from 'contexts/FinalPayProvider';
import useVMState from 'hooks/useVMState';

export default function PutBtn() {
  const finalPay = useContext(FinalPayContext);
  const { startTimerToReset } = useVMState();

  return <Button onClick={() => startTimerToReset(finalPay)}>반환</Button>;
}
