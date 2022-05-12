import { createContext, Dispatch, useReducer, useContext } from 'react';

export interface IItem {
  uuid: number;
  image: string;
  text: string;
  price: number;
  count: number;
}

type ItemAction =
  | { type: 'SELECT_ITEM' }
  | { type: 'INSERT_ITEM'; count: number };

type ItemDispatch = Dispatch<ItemAction>;
type ItemState = IItem[];

const ItemStateContext = createContext<ItemState | null>(null);
const ItemDispatchContext = createContext<ItemDispatch | null>(null);

function itemReducer(state: ItemState, action: ItemAction): ItemState {
  switch (action.type) {
    case 'SELECT_ITEM':
      return state;
    case 'INSERT_ITEM':
    // return {};
    default:
      throw new Error('Unhandled action');
  }
}

export function itemContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, dispatch] = useReducer(itemReducer, [
    {
      uuid: 1,
      image: '/images/sample.png',
      text: '아메리카노',
      price: 500,
      count: 5,
    },
    {
      uuid: 2,
      image: '/images/sample.png',
      text: '카페라떼',
      price: 1000,
      count: 5,
    },
    {
      uuid: 3,
      image: '/images/sample.png',
      text: '카푸치노',
      price: 400,
      count: 5,
    },
    {
      uuid: 4,
      image: '/images/sample.png',
      text: '모카치노',
      price: 300,
      count: 5,
    },
    {
      uuid: 5,
      image: '/images/sample.png',
      text: '녹차라떼',
      price: 900,
      count: 5,
    },
    {
      uuid: 6,
      image: '/images/sample.png',
      text: '핫초코',
      price: 1200,
      count: 5,
    },
    {
      uuid: 7,
      image: '/images/sample.png',
      text: '오곡라떼',
      price: 1000,
      count: 5,
    },
    {
      uuid: 8,
      image: '/images/sample.png',
      text: '초코밀크',
      price: 1000,
      count: 5,
    },
    {
      uuid: 9,
      image: '/images/sample.png',
      text: '오트밀라떼',
      price: 2000,
      count: 5,
    },
    {
      uuid: 10,
      image: '/images/sample.png',
      text: '검정콩라떼',
      price: 1000,
      count: 0,
    },
    {
      uuid: 11,
      image: '/images/sample.png',
      text: '레몬에이드',
      price: 7000,
      count: 5,
    },
    {
      uuid: 12,
      image: '/images/sample.png',
      text: '블루베리 에이드',
      price: 600,
      count: 0,
    },
  ]);

  return (
    <ItemDispatchContext.Provider value={dispatch}>
      <ItemStateContext.Provider value={items}>
        {children}
      </ItemStateContext.Provider>
    </ItemDispatchContext.Provider>
  );
}

export function useItemState() {
  const state = useContext(ItemStateContext);
  if (!state) throw new Error('Cannot find ItemContextProvider');
  return state;
}

export function useItemDispatch() {
  const dispatch = useContext(ItemDispatchContext);
  if (!dispatch) throw new Error('Cannot find ItemContextProvider');
  return dispatch;
}
