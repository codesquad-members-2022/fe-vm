import React, { useRef } from 'react';

import Product from '@/components/Product';
import { useMachine } from '@/Context/VMContext/MachineContext';

export interface Props {
  className: string;
}

const Display = ({ className }: Props) => {
  const { state: machineState } = useMachine();

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
        />
      ))}
    </div>
  );
};

export default Display;
