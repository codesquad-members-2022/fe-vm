import React, { useContext } from 'react';

import Product from '@/components/Product';
import { VMContext } from '@/Provider/VMProvider';

const Display = ({ className }) => {
  const { state, dispatch } = useContext(VMContext);
  const { products } = state;
  return (
    <div className={className}>
      {products.map(({ id, name, price, stock }) => {
        return <Product key={id} name={name} price={price} stock={stock} purchasable={false} />;
      })}
    </div>
  );
};

export default Display;
