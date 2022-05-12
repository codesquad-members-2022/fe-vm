import { createContext, Dispatch, useReducer } from 'react';

interface IWallet {
  uuid: number;
  unit: number;
  count: number;
}

// ducks pattern -> 액션타입, 액션생성함수, 리듀서를 모두 한 파일에 작성

const INCREASE = 'wallet/INCREASE' as const;
const DECREASE = 'wallet/DECREASE' as const;

type WalletAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;
type WalletDispatch = Dispatch<WalletAction>;
type WalletState = IWallet[];

const WalletStateContext = createContext<WalletState | null>(null);
const WalletDispatchContext = createContext<WalletDispatch | null>(null);

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

function walletReducer(state: WalletState, action: WalletAction): WalletState {
  switch (action.type) {
    case INCREASE:
    // return {};
    case DECREASE:
    // return {};
    default:
      throw new Error('Unhandled action');
  }
}

export default function WalletContextProvider({
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
    { uuid: 6, unit: 5000, count: 2 },
    { uuid: 7, unit: 10000, count: 1 },
  ]);

  return (
    <WalletDispatchContext.Provider value={dispatch}>
      <WalletStateContext.Provider value={wallets}>
        {children}
      </WalletStateContext.Provider>
    </WalletDispatchContext.Provider>
  );
}
