import { createContext, Dispatch, useReducer, useContext } from 'react';

interface IMessage {
  unit: number;
  message: string;
}

export type MessageAction =
  | { type: 'SELECT_PRICE' }
  | { type: 'ADD_PRICE'; unit: number }
  | { type: 'SELECT_MESSAGE'; unit: number; message: string }
  | { type: 'INSERT_MESSAGE'; unit: number; message: string };

type MessageDispatch = Dispatch<MessageAction>;
type MessageState = IMessage[];

const MessageStateContext = createContext<MessageState | null>(null);
const MessageDispatchContext = createContext<MessageDispatch | null>(null);

function messageReducer(
  state: MessageState,
  action: MessageAction,
): MessageState {
  switch (action.type) {
    case 'SELECT_MESSAGE':
      return state;
    case 'INSERT_MESSAGE':
      return [...state, { unit: action.unit, message: action.message }];

    default:
      throw new Error('Unhandled action');
  }
}

export function MessageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Message, messageDispatch] = useReducer(messageReducer, []);

  return (
    <MessageDispatchContext.Provider value={messageDispatch}>
      <MessageStateContext.Provider value={Message}>
        {children}
      </MessageStateContext.Provider>
    </MessageDispatchContext.Provider>
  );
}

export function useMessageState() {
  const state = useContext(MessageStateContext);
  if (!state) throw new Error('Cannot find MessageContextProvider');
  return state;
}

export function useMessageDispatch() {
  const dispatch = useContext(MessageDispatchContext);
  if (!dispatch) throw new Error('Cannot find MessageContextProvider');
  return dispatch;
}
