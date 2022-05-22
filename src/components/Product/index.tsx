import React, { memo, MutableRefObject, useState } from 'react';

import { LOG_ACTION, LogDispatch } from '@/Context/VMContext/LogContext';
import { IProduct, MACHINE_ACTION, MachineDispatch } from '@/Context/VMContext/MachineContext';

import * as S from './styles';

export interface Props {
  product: IProduct;
  index: number;
  purchasable: boolean;
  isInProcess: MutableRefObject<boolean>;
  machineDispatch: MachineDispatch;
  logDispatch: LogDispatch;
}

const Product = memo(
  ({ product, index, purchasable, isInProcess, machineDispatch, logDispatch }: Props) => {
    const outOfStock = product.stock === 0;
    const maxNumOfDisplay = 99;
    const [isSelected, setIsSelected] = useState(false);

    // const onClick = throttle(() => {
    //   dispatch({
    //     type: ACTION.SELECT_PRODUCT,
    //     payload: { name, price, stock, index },
    //   });
    //
    //   isInProcess.current = false;
    //   setIsSelected(false);
    // }, SELECT_PRODUCT_THROTTLE_DELAY * 1000);

    const onClick = () => {
      machineDispatch({
        type: MACHINE_ACTION.SELECT_PRODUCT,
        payload: { product, index },
      });

      isInProcess.current = false;
      setIsSelected(false);
    };

    // NOTE: machineDispatch: products, totalInputAmount 업데이트
    // NOTE: logDispatch: log 업데이트
    const onClickProduct = (): void => {
      if (isInProcess.current) {
        return;
      }

      if (outOfStock || !purchasable) {
        isInProcess.current = false;
        return;
      }

      isInProcess.current = true;
      setIsSelected(true);
      onClick();
      logDispatch({ type: LOG_ACTION.SELECT_PRODUCT, payload: { name: product.name } });

      // dispatch({
      //   type: ACTION.SET_TIMER,
      //   payload: {
      //     key: 'returnChange',
      //     delay: RETURN_CHANGE_DELAY + SELECT_PRODUCT_THROTTLE_DELAY,
      //     callback: () => {
      //       dispatch({ type: ACTION.RETURN_CHANGE });
      //     },
      //   },
      // });
    };

    return (
      <S.ProductLayer
        onClick={onClickProduct}
        purchasable={purchasable}
        outOfStock={outOfStock}
        dir="column"
      >
        <S.Name>{product.name}</S.Name>
        <S.Price>{product.price.toLocaleString()}원</S.Price>
        <S.Stock>
          {outOfStock ? null : Math.min(maxNumOfDisplay, product.stock)}
          <span>{product.stock > maxNumOfDisplay && '+'}</span>
        </S.Stock>
        {outOfStock && <S.DisabledMark>Out Of Stock</S.DisabledMark>}
        {isSelected && <S.ProgressBox />}
      </S.ProductLayer>
    );
  },
);

export default Product;
