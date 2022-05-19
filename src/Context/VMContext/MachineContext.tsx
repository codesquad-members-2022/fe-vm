import React, { Dispatch, createContext, useReducer, useMemo, useContext } from 'react';

import { products } from '@/mock/storage';

// TODO: 제품 선택 (product, index)
// TODO: 금액 투입 (amount)
// TODO: 금액 반환 (amount)
enum MACHINE_ACTION {
  SELECT_PRODUCT = 'SELECT_PRODUCT',
  INSERT_MONEY = 'INSERT_MONEY',
  RETURN_MONEY = 'RETURN_MONEY',
}

interface IMachine {
  products: IProduct[];
  totalInputAmount: number;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
  stock: number;
}

type MachineAction =
  | { type: MACHINE_ACTION.SELECT_PRODUCT; payload: { product: IProduct; index: number } }
  | { type: MACHINE_ACTION.INSERT_MONEY; payload: { amount: number } }
  | { type: MACHINE_ACTION.RETURN_MONEY };
type MachineDispatch = Dispatch<MachineAction>;

const MachineContext = createContext<{ state: IMachine; dispatch: MachineDispatch } | null>(null);

const machineReducer = (state: IMachine, action: MachineAction): IMachine => {
  switch (action.type) {
    case MACHINE_ACTION.SELECT_PRODUCT: {
      const { product, index } = action.payload;
      const { price, stock } = product;
      const { products, totalInputAmount } = state;
      if (totalInputAmount < price) {
        return state;
      }

      // TODO: 바뀌는 product만 수정하기
      const newProducts = [...products];
      newProducts[index] = { ...newProducts[index], stock: stock - 1 };
      const newTotalInputAmount = totalInputAmount - price;

      return {
        ...state,
        products: newProducts,
        totalInputAmount: newTotalInputAmount,
      };
    }

    case MACHINE_ACTION.INSERT_MONEY: {
      const { amount } = action.payload;
      const { totalInputAmount } = state;
      return {
        ...state,
        totalInputAmount: totalInputAmount + amount,
      };
    }

    case MACHINE_ACTION.RETURN_MONEY: {
      return {
        ...state,
        totalInputAmount: 0,
      };
    }

    default: {
      return state;
    }
  }
};

const machineInitialState = {
  products,
  totalInputAmount: 0,
};

const MachineProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(machineReducer, machineInitialState);
  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <MachineContext.Provider value={value}>{children}</MachineContext.Provider>;
};

const useMachine = () => {
  const machine = useContext(MachineContext);

  if (!machine) {
    throw new Error('MachineContext Error');
  }

  return machine;
};

export { useMachine, MachineProvider, MACHINE_ACTION };
