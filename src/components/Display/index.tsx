import React, { useRef } from 'react';

import Product from '@/components/Product';
import { useLog } from '@/Context/VMContext/LogContext';
import { useMachine } from '@/Context/VMContext/MachineContext';

export interface Props {
  className: string;
}

const Display = ({ className }: Props) => {
  const { state: machineState, dispatch: machineDispatch } = useMachine();
  const { dispatch: logDispatch } = useLog();
  const isInProcess = useRef<boolean>(false);

  return (
    <div className={className}>
      {machineState.products.map((product, index) => (
        <Product
          key={product.id}
          product={product}
          index={index}
          purchasable={machineState.totalInputAmount >= product.price}
          isInProcess={isInProcess}
          machineDispatch={machineDispatch}
          logDispatch={logDispatch}
        />
      ))}
    </div>
  );
};

export default Display;
