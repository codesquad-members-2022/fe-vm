import React, { useContext, useRef } from 'react';

import Product from '@/components/Product';
import { IProviderValue, VMContext } from '@/Provider/VMProvider';

export interface Props {
  className: string;
}

const Display = ({ className }: Props) => {
  const {
    state: { products, totalInputAmount },
    dispatch,
  } = useContext<IProviderValue>(VMContext);
  const isInProcess = useRef<boolean>(false);

  return (
    <div className={className}>
      {products.map((product, index) => (
        <Product
          key={product.id}
          {...product}
          index={index}
          purchasable={totalInputAmount >= product.price}
          isInProcess={isInProcess}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Display;
