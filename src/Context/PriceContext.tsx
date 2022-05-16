import { createContext, Dispatch, useReducer, useContext } from 'react';

type PriceAction =
  | { type: 'SELECT_PRICE' }
  | { type: 'ADD_PRICE'; price: number | undefined }
  | { type: 'DELETE_ALL_PRICE' };

type PriceDispatch = Dispatch<PriceAction>;
type PriceState = number | undefined;

const PriceStateContext = createContext<PriceState | null>(null);
const PriceDispatchContext = createContext<PriceDispatch | null>(null);

function priceReducer(state: PriceState, action: PriceAction): PriceState {
  switch (action.type) {
    case 'SELECT_PRICE':
      return state;
    case 'ADD_PRICE':
      return (state += action.price);
    case 'DELETE_ALL_PRICE':
      return (state = 0);
    default:
      throw new Error('Unhandled action');
  }
}

export function PriceContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Price, dispatch] = useReducer(priceReducer, 0);

  return (
    <PriceDispatchContext.Provider value={dispatch}>
      <PriceStateContext.Provider value={Price}>
        {children}
      </PriceStateContext.Provider>
    </PriceDispatchContext.Provider>
  );
}

export function usePriceState() {
  const state = useContext(PriceStateContext);
  return state;
}

export function usePriceDispatch() {
  const dispatch = useContext(PriceDispatchContext);
  if (!dispatch) throw new Error('Cannot find PriceContextProvider');
  return dispatch;
}
