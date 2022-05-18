import React, { useContext, useRef } from 'react';

import Product from '@/components/Product';
import { VMContext } from '@/Provider/VMProvider';

export interface Props {
  className: string;
}

const Display = ({ className }: Props) => {
  const {
    state: { products, totalInputAmount },
    dispatch,
  } = useContext(VMContext);
  const isInProcess = useRef(false);

  return (
    <div className={className}>
      {products.map((product, index) => (
        <Product
          key={product.id}
          {...product}
          index={index}
          dispatch={dispatch}
          purchasable={totalInputAmount >= product.price}
          isInProcess={isInProcess}
        />
      ))}
    </div>
  );
};

export default Display;
