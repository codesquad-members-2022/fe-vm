// import React, { Dispatch, createContext, useReducer, useContext, useMemo } from 'react';
//
// import { products, coins } from '@/mock/storage';
//
// interface IVMState {
//   products: IProduct[];
//   coins: ICoin[];
//   logs: ILog[];
//   totalInputAmount: number;
//   balance: number;
//   timer: ITimer;
// }
//
// interface IProduct {
//   id: string;
//   name: string;
//   price: number;
//   stock: number;
// }
//
// interface ICoin {
//   id: string;
//   amount: number;
//   count: number;
// }
//
// interface ILog {
//   id: string;
//   message: string;
// }
//
// interface ITimer {
//   [key: string]: NodeJS.Timeout;
// }
//
// interface IProviderValue {
//   state: IVMState;
//   dispatch: Dispatch<ActionType>;
// }
//
// export type ActionType =
//   | { type: ACTION.INSERT_MONEY_BY_TYPING; payload: { amount: number } }
//   | { type: ACTION.INSERT_COIN; payload: { amount: number; count: number; index: number } }
//   | { type: ACTION.INCREMENT_COIN; payload: { amount: number; count: number; index: number } }
//   | {
//       type: ACTION.SELECT_PRODUCT;
//       payload: { name: string; price: number; stock: number; index: number };
//     }
//   | { type: ACTION.RETURN_CHANGE }
//   | { type: ACTION.DELETE_ALL_LOGS }
//   | { type: ACTION.SET_TIMER; payload: { key: string; delay: number; callback: any } }
//   | { type: ACTION.CLEAR_TIMER; payload: { key: string } };
//
// const initialState: IVMState = {
//   timer: {},
//
//   // NOTE3: LogContext
//   logs: [],
//
//   // NOTE2: MachineContext
//   products,
//   totalInputAmount: 0,
//
//   // NOTE: WalletContext
//   coins,
//   balance: coins.reduce((acc, { amount, count }) => acc + amount * count, 0),
// };
//
// enum ACTION {
//   // NOTE: WalletContext
//   INSERT_MONEY_BY_TYPING = 'INSERT_MONEY_BY_TYPING',
//   INSERT_COIN = 'INSERT_COIN',
//   INCREMENT_COIN = 'INCREMENT_COIN',
//
//   SELECT_PRODUCT = 'SELECT_PRODUCT',
//   RETURN_CHANGE = 'RETURN_CHANGE',
//   DELETE_ALL_LOGS = 'DELETE_ALL_LOGS',
//   SET_TIMER = 'SET_TIMER',
//   CLEAR_TIMER = 'CLEAR_TIMER',
// }
//
// const reducer = (state: IVMState, action: ActionType): IVMState => {
//   switch (action.type) {
//     // PAYLOAD: amount
//     // NOTE: WalletContext
//     case ACTION.INSERT_MONEY_BY_TYPING: {
//       const { amount } = action.payload;
//       const { balance, coins, logs, totalInputAmount } = state;
//       const requestedInputAmount = balance < amount ? balance : amount;
//       const newCoins = [...coins];
//
//       if (requestedInputAmount === 0) {
//         return state;
//       }
//
//       let surplus = requestedInputAmount;
//
//       for (let i = newCoins.length - 1; i >= 0; i--) {
//         if (surplus === 0) {
//           break;
//         }
//
//         const { amount, count } = newCoins[i];
//
//         const requiredCount = Math.floor(surplus / amount);
//         const realRequiredCount = requiredCount > count ? count : requiredCount;
//         const newCount = count - realRequiredCount;
//         surplus -= realRequiredCount * amount;
//         newCoins[i] = { ...newCoins[i], count: newCount };
//
//         console.log(`%c[${amount}]: ${realRequiredCount}개 사용`, 'color: #fe2;');
//       }
//       console.log(`----------`);
//       const realInputAmount = requestedInputAmount - surplus;
//
//       const newLogs = [
//         ...logs,
//         {
//           id: logs.length.toString(),
//           message: `${realInputAmount.toLocaleString()}원이 투입됐습니다.`,
//         },
//       ];
//
//       const newTotalInputAmount = totalInputAmount + realInputAmount;
//
//       const newBalance = balance - realInputAmount;
//
//       return {
//         ...state,
//         totalInputAmount: newTotalInputAmount,
//         coins: newCoins,
//         logs: newLogs,
//         balance: newBalance,
//       };
//     }
//
//     // PAYLOAD: amount, count, index
//     // NOTE: WalletContext
//     // TODO: amount
//     case ACTION.INSERT_COIN: {
//       const { amount, count, index } = action.payload;
//       const { logs, totalInputAmount, coins, balance } = state;
//
//       const newLogs = [
//         ...logs,
//         { id: logs.length.toString(), message: `${amount.toLocaleString()}원이 투입됐습니다.` },
//       ];
//
//       const newCoins = [...coins];
//       newCoins[index] = { ...newCoins[index] };
//       newCoins[index].count = count - 1;
//
//       const newTotalInputAmount = totalInputAmount + amount;
//
//       const newBalance = balance - amount;
//
//       return {
//         ...state,
//         logs: newLogs,
//
//         // NOTE2: MachineContext
//         totalInputAmount: newTotalInputAmount,
//
//         // NOTE: WalletContext
//         coins: newCoins,
//         balance: newBalance,
//       };
//     }
//
//     // NOTE: WalletContext
//     // PAYLOAD: amount, count, index
//     case ACTION.INCREMENT_COIN: {
//       const { amount, count, index } = action.payload;
//       const { coins, balance } = state;
//
//       const newCoins = [...coins];
//       newCoins[index] = { ...newCoins[index] };
//       newCoins[index].count = count + 1;
//
//       const newBalance = balance + amount;
//
//       return {
//         ...state,
//         coins: newCoins,
//         balance: newBalance,
//       };
//     }
//
//     // PAYLOAD: name, price, stock, index
//     // TODO: name
//     // NOTE2: MachineContext
//     case ACTION.SELECT_PRODUCT: {
//       const { name, price, stock, index } = action.payload;
//       const { totalInputAmount, products, logs } = state;
//
//       if (totalInputAmount < price) {
//         return state;
//       }
//
//       const newStock = stock - 1;
//       const newProducts = [...products];
//       newProducts[index] = { ...newProducts[index], stock: newStock };
//
//       const newLogs = [
//         ...logs,
//         {
//           id: logs.length.toString(),
//           message: `${name}이(가) 선택됨`,
//         },
//       ];
//
//       const newTotalInputAmount = totalInputAmount - price;
//
//       return {
//         ...state,
//         logs: newLogs,
//
//         //NOTE2: MachineContext
//         products: newProducts,
//         totalInputAmount: newTotalInputAmount,
//       };
//     }
//
//     // PAYLOAD: null
//     // TODO: totalInputAmount
//     case ACTION.RETURN_CHANGE: {
//       const { balance, coins, logs, totalInputAmount } = state;
//       if (totalInputAmount === 0) {
//         return state;
//       }
//
//       const newBalance = balance + totalInputAmount;
//       const newLogs = [
//         ...logs,
//         { id: logs.length.toString(), message: `잔돈 ${totalInputAmount.toLocaleString()}원 반환` },
//       ];
//       const newCoins = [...coins];
//
//       let remain = totalInputAmount;
//       for (let i = newCoins.length - 1; i >= 0; i--) {
//         const { amount, count } = newCoins[i];
//         if (amount > remain) {
//           continue;
//         }
//
//         const newCount = count + Math.floor(remain / amount);
//         newCoins[i] = { ...newCoins[i], count: newCount };
//         remain %= amount;
//         console.log(`%c[${amount}]: ${newCount - count}개 충전`, 'color: #fe2;');
//       }
//       console.log(`----------`);
//
//       return {
//         ...state,
//         coins: newCoins,
//         logs: newLogs,
//         totalInputAmount: 0,
//         balance: newBalance,
//       };
//     }
//
//     // PAYLOAD: null
//     // NOTE3: LogContext
//     case ACTION.DELETE_ALL_LOGS: {
//       return {
//         ...state,
//         logs: [],
//       };
//     }
//
//     // NOTE: useTimer
//     // PAYLOAD: key, delay, callback
//     case ACTION.SET_TIMER: {
//       const { key, delay, callback } = action.payload;
//       const { timer } = state;
//
//       if (Object.hasOwn(timer, key)) {
//         clearTimeout(timer[key]);
//       }
//
//       timer[key] = setTimeout(callback, delay * 1000);
//       return state;
//     }
//
//     // PAYLOAD: key
//     case ACTION.CLEAR_TIMER: {
//       const { key } = action.payload;
//       const { timer } = state;
//
//       if (Object.hasOwn(timer, key)) {
//         clearTimeout(timer[key]);
//       }
//
//       return state;
//     }
//
//     default: {
//       return state;
//     }
//   }
// };
//
// const VMContext = createContext<IProviderValue>({ state: initialState, dispatch: () => {} });
//
// const VMProvider = ({ children }: any) => {
//   const [state, dispatch] = useReducer(reducer, initialState, undefined);
//
//   const value = useMemo<IProviderValue>(() => {
//     return {
//       state,
//       dispatch,
//     };
//   }, [state]);
//
//   return <VMContext.Provider value={value}>{children}</VMContext.Provider>;
// };
//
// export { ACTION, VMContext, VMProvider, IProviderValue };
