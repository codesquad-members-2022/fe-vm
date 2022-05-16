import { createContext, Dispatch, useReducer, useContext } from 'react';

interface IWallet {
  uuid: number;
  unit: 10 | 50 | 100 | 500 | 1000 | 5000 | 10000;
  count: number;
}

// ducks pattern -> 액션타입, 액션생성함수, 리듀서를 모두 한 파일에 작성

// 모든 액션 객체들에 대한 타입 준비
type WalletAction =
  | { type: 'INCREASE_WALLET_UNIT'; unit: number; count: number }
  | { type: 'DECREASE_WALLET_UNIT'; unit: number; count: number }
  | { type: 'UPDATE_WALLET_UNIT'; unit: number; count: number };

type WalletDispatch = Dispatch<WalletAction>;
type WalletState = IWallet[];

const WalletStateContext = createContext<WalletState | null>(null);
const WalletDispatchContext = createContext<WalletDispatch | null>(null);

function walletReducer(state: WalletState, action: WalletAction): WalletState {
  switch (action.type) {
    case 'INCREASE_WALLET_UNIT':
      return state.map(wallet => {
        return wallet.unit === action.unit
          ? { ...wallet, count: (wallet.count += action.count) }
          : wallet;
      });

    case 'DECREASE_WALLET_UNIT':
      return state.map(wallet => {
        return wallet.unit === action.unit
          ? { ...wallet, count: (wallet.count -= action.count) }
          : wallet;
      });

    case 'UPDATE_WALLET_UNIT':
    // return [...state, { unit: action.unit, count: action.count }];
    default:
      throw new Error('Unhandled action');
  }
}

export function WalletContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wallets, dispatch] = useReducer(walletReducer, [
    { uuid: 1, unit: 10, count: 0 },
    { uuid: 2, unit: 50, count: 1 },
    { uuid: 3, unit: 100, count: 5 },
    { uuid: 4, unit: 500, count: 5 },
    { uuid: 5, unit: 1000, count: 2 },
    { uuid: 6, unit: 5000, count: 0 },
    { uuid: 7, unit: 10000, count: 0 },
  ]);

  return (
    <WalletDispatchContext.Provider value={dispatch}>
      <WalletStateContext.Provider value={wallets}>
        {children}
      </WalletStateContext.Provider>
    </WalletDispatchContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useWalletState() {
  const state = useContext(WalletStateContext);
  if (!state) throw new Error('Cannot find WalletContextProvider');
  return state;
}

export function useWalletDispatch() {
  const dispatch = useContext(WalletDispatchContext);
  if (!dispatch) throw new Error('Cannot find WalletContextProvider');
  return dispatch;
}
