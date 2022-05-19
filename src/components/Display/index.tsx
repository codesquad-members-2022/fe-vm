import React, { useContext, useRef } from 'react';

import Product from '@/components/Product';
import { IProviderValue, VMContext } from '@/Context/VMContext';
import { useLog } from '@/Context/VMContext/LogContext';
import { useMachine } from '@/Context/VMContext/MachineContext';

export interface Props {
  className: string;
}

const Display = ({ className }: Props) => {
  const { state: mState, dispatch: mDispatch } = useMachine();
  const { state: lState, dispatch: lDispatch } = useLog();
  const {
    state: { products, totalInputAmount },
    dispatch,
  } = useContext<IProviderValue>(VMContext);
  const isInProcess = useRef<boolean>(false);

  return (
    <>
      {/*<div className={className}>*/}
      {/*  {products.map((product, index) => (*/}
      {/*    <Product*/}
      {/*      key={product.id}*/}
      {/*      {...product}*/}
      {/*      index={index}*/}
      {/*      purchasable={totalInputAmount >= product.price}*/}
      {/*      isInProcess={isInProcess}*/}
      {/*      dispatch={dispatch}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div className={className}>
        {mState.products.map((product, index) => (
          <Product
            key={product.id}
            {...product}
            product={product}
            index={index}
            purchasable={mState.totalInputAmount >= product.price}
            isInProcess={isInProcess}
            mDispatch={mDispatch}
            lDispatch={lDispatch}
          />
        ))}
      </div>
    </>
  );
};

export default Display;
