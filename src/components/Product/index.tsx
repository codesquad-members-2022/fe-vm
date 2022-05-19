import React, { memo, MutableRefObject, useState } from 'react';

import { ActionType } from '@/Context/VMContext';
import { LOG_ACTION, LogDispatch } from '@/Context/VMContext/LogContext';
import { MACHINE_ACTION, MachineDispatch } from '@/Context/VMContext/MachineContext';

import * as S from './styles';

export interface Props {
  id: string;
  name: string;
  price: number;
  stock: number;
  index: number;
  purchasable: boolean;
  isInProcess: MutableRefObject<boolean>;
  dispatch: React.Dispatch<ActionType>; // TODO
  mDispatch: MachineDispatch;
  lDispatch: LogDispatch;
}

const Product = memo(
  ({
    id,
    name,
    price,
    stock,
    index,
    purchasable,
    isInProcess,
    dispatch,
    mDispatch,
    lDispatch,
  }: Props) => {
    const outOfStock = stock === 0;
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
      mDispatch({
        type: MACHINE_ACTION.SELECT_PRODUCT,
        payload: { product: { id, name, price, stock }, index },
      });

      isInProcess.current = false;
      setIsSelected(false);
    };

    // NOTE: mDispatch: products, totalInputAmount 업데이트
    // NOTE: lDispatch: log 업데이트
    const onClickProduct = (event) => {
      if (isInProcess.current) {
        return;
      }

      if (outOfStock || !purchasable) {
        isInProcess.current = false;
        return;
      }

      isInProcess.current = true;
      setIsSelected(true);
      onClick(event);
      lDispatch({ type: LOG_ACTION.SELECT_PRODUCT, payload: { name } });

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
      <>
        {/*<ProductLayer*/}
        {/*  onClick={onClickProduct}*/}
        {/*  purchasable={purchasable}*/}
        {/*  outOfStock={outOfStock}*/}
        {/*  dir="column"*/}
        {/*>*/}
        {/*  <Name>{name}</Name>*/}
        {/*  <Price>{price.toLocaleString()}원</Price>*/}
        {/*  <Stock>*/}
        {/*    {outOfStock ? null : Math.min(maxNumOfDisplay, stock)}*/}
        {/*    <span>{stock > maxNumOfDisplay && '+'}</span>*/}
        {/*  </Stock>*/}
        {/*  {outOfStock && <DisabledMark>Out Of Stock</DisabledMark>}*/}
        {/*  {isSelected && <ProgressBox />}*/}
        {/*</ProductLayer>*/}
        <S.ProductLayer
          onClick={onClickProduct}
          purchasable={purchasable}
          outOfStock={outOfStock}
          dir="column"
        >
          <S.Name>{name}</S.Name>
          <S.Price>{price.toLocaleString()}원</S.Price>
          <S.Stock>
            {outOfStock ? null : Math.min(maxNumOfDisplay, stock)}
            <span>{stock > maxNumOfDisplay && '+'}</span>
          </S.Stock>
          {outOfStock && <S.DisabledMark>Out Of Stock</S.DisabledMark>}
          {isSelected && <S.ProgressBox />}
        </S.ProductLayer>
      </>
    );
  },
);

export default Product;
