import React, { useContext } from 'react';
import { Button } from 'components/orderArea/ReturnBtn.style';
import { FinalPayContext } from 'contexts/FinalPayProvider';
import useVMState from 'hooks/useVMState';

export default function PutBtn() {
  const finalPay = useContext(FinalPayContext);
  const { returnPay } = useVMState();

  return <Button onClick={() => returnPay(finalPay)}>반환</Button>;
}
