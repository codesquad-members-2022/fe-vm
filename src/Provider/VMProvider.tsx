import React, { createContext, useReducer, useMemo } from 'react';

import { products, coins } from '@/mock/storage';

interface IState {
  products: IProduct[];
  coins: ICoin[];
  logs: ILog[];
  totalInputAmount: number;
  balance: number;
  timer: ITimer;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface ICoin {
  id: string;
  amount: number;
  count: number;
}

interface ILog {
  id: string;
  message: string;
}

interface ITimer {
  [key: string]: NodeJS.Timeout;
}

/*interface IPayload {
  index?: number;

  amount?: number;
  count?: number;

  name?: string;
  price?: number;
  stock?: number;

  key?: string;
  delay?: number;
  callback?: object;
}*/

interface IAction {
  type: ACTION;
  payload: any;
}

const initialState: IState = {
  products,
  coins,
  logs: [],
  totalInputAmount: 0,
  balance: coins.reduce((acc, { amount, count }) => acc + amount * count, 0),
  timer: {},
};

enum ACTION {
  INSERT_MONEY_BY_TYPING = 'INSERT_MONEY_BY_TYPING',
  INSERT_COIN = 'INSERT_COIN',
  INCREMENT_COIN = 'INCREMENT_COIN',
  SELECT_PRODUCT = 'SELECT_PRODUCT',
  RETURN_CHANGE = 'RETURN_CHANGE',
  DELETE_ALL_LOGS = 'DELETE_ALL_LOGS',
  SET_TIMER = 'SET_TIMER',
  CLEAR_TIMER = 'CLEAR_TIMER',
}

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    // PAYLOAD: amount
    case ACTION.INSERT_MONEY_BY_TYPING: {
      const { amount } = action.payload;
      const { balance, coins, logs, totalInputAmount } = state;
      const requestedInputAmount = balance < amount ? balance : amount;
      const newCoins = [...coins];

      if (requestedInputAmount === 0) {
        return state;
      }

      let surplus = requestedInputAmount;

      for (let i = newCoins.length - 1; i >= 0; i--) {
        if (surplus === 0) {
          break;
        }

        const { amount, count } = newCoins[i];

        const requiredCount = Math.floor(surplus / amount);
        const realRequiredCount = requiredCount > count ? count : requiredCount;
        const newCount = count - realRequiredCount;
        surplus -= realRequiredCount * amount;
        newCoins[i] = { ...newCoins[i], count: newCount };

        console.log(`%c[${amount}]: ${realRequiredCount}개 사용`, 'color: #fe2;');
      }
      console.log(`----------`);
      const realInputAmount = requestedInputAmount - surplus;

      const newLogs = [
        ...logs,
        {
          id: logs.length.toString(),
          message: `${realInputAmount.toLocaleString()}원이 투입됐습니다.`,
        },
      ];

      const newTotalInputAmount = totalInputAmount + realInputAmount;

      const newBalance = balance - realInputAmount;

      return {
        ...state,
        totalInputAmount: newTotalInputAmount,
        coins: newCoins,
        logs: newLogs,
        balance: newBalance,
      };
    }

    // PAYLOAD: amount, count, index
    // TODO: amount
    case ACTION.INSERT_COIN: {
      const { amount, count, index } = action.payload;
      const { logs, totalInputAmount, coins, balance } = state;

      const newLogs = [
        ...logs,
        { id: logs.length.toString(), message: `${amount.toLocaleString()}원이 투입됐습니다.` },
      ];

      const newCoins = [...coins];
      newCoins[index] = { ...newCoins[index] };
      newCoins[index].count = count - 1;

      const newTotalInputAmount = totalInputAmount + amount;

      const newBalance = balance - amount;

      return {
        ...state,
        logs: newLogs,
        coins: newCoins,
        totalInputAmount: newTotalInputAmount,
        balance: newBalance,
      };
    }

    // PAYLOAD: amount, count, index
    case ACTION.INCREMENT_COIN: {
      const { amount, count, index } = action.payload;
      const { coins, balance } = state;

      const newCoins = [...coins];
      newCoins[index] = { ...newCoins[index] };
      newCoins[index].count = count + 1;

      const newBalance = balance + amount;

      return {
        ...state,
        coins: newCoins,
        balance: newBalance,
      };
    }

    // PAYLOAD: name, price, stock, index
    // TODO: name
    case ACTION.SELECT_PRODUCT: {
      const { name, price, stock, index } = action.payload;
      const { totalInputAmount, products, logs } = state;

      if (totalInputAmount < price) {
        return state;
      }

      const newStock = stock - 1;
      const newProducts = [...products];
      newProducts[index] = { ...newProducts[index], stock: newStock };

      const newLogs = [
        ...logs,
        {
          id: logs.length.toString(),
          message: `${name}이(가) 선택됨`,
        },
      ];

      const newTotalInputAmount = totalInputAmount - price;

      return {
        ...state,
        products: newProducts,
        logs: newLogs,
        totalInputAmount: newTotalInputAmount,
      };
    }

    // PAYLOAD: null
    // TODO: totalInputAmount
    case ACTION.RETURN_CHANGE: {
      const { balance, coins, logs, totalInputAmount } = state;
      if (totalInputAmount === 0) {
        return state;
      }

      const newBalance = balance + totalInputAmount;
      const newLogs = [
        ...logs,
        { id: logs.length.toString(), message: `잔돈 ${totalInputAmount.toLocaleString()}원 반환` },
      ];
      const newCoins = [...coins];

      let remain = totalInputAmount;
      for (let i = newCoins.length - 1; i >= 0; i--) {
        const { amount, count } = newCoins[i];
        if (amount > remain) {
          continue;
        }

        const newCount = count + Math.floor(remain / amount);
        newCoins[i] = { ...newCoins[i], count: newCount };
        remain %= amount;
        console.log(`%c[${amount}]: ${newCount - count}개 충전`, 'color: #fe2;');
      }
      console.log(`----------`);

      return {
        ...state,
        coins: newCoins,
        logs: newLogs,
        totalInputAmount: 0,
        balance: newBalance,
      };
    }

    // PAYLOAD: null
    case ACTION.DELETE_ALL_LOGS: {
      return {
        ...state,
        logs: [],
      };
    }

    // PAYLOAD: key, delay, callback
    case ACTION.SET_TIMER: {
      const { key, delay, callback } = action.payload;
      const { timer } = state;

      if (Object.hasOwn(timer, key)) {
        clearTimeout(timer[key]);
      }

      timer[key] = setTimeout(callback, delay * 1000);
      return state;
    }

    // PAYLOAD: key
    case ACTION.CLEAR_TIMER: {
      const { key } = action.payload;
      const { timer } = state;

      if (Object.hasOwn(timer, key)) {
        clearTimeout(timer[key]);
      }

      return state;
    }

    default: {
      return state;
    }
  }
};

const VMContext = createContext(null);

const VMProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState, undefined);

  const value: any = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <VMContext.Provider value={value}>{children}</VMContext.Provider>;
};

export { ACTION, VMContext, VMProvider };
