import React, { useContext } from 'react';

import Product from '@/components/Product';
import { VMContext } from '@/Provider/VMProvider';

const Display = ({ className }) => {
  const {
    state: { products, totalInputAmount },
    dispatch,
  } = useContext(VMContext);

  return (
    <div className={className}>
      {products.map(({ id, name, price, stock }, index) => (
        <Product
          key={id}
          name={name}
          price={price}
          stock={stock}
          index={index}
          dispatch={dispatch}
          purchasable={totalInputAmount >= price}
        />
      ))}
    </div>
  );
};

export default Display;
