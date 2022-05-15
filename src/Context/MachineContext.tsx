import { createContext, Dispatch, useReducer, useContext } from 'react';

interface IMachine {
  unit: number;
  message: string;
}

type MachineAction =
  | { type: 'SELECT_PRICE' }
  | { type: 'UPDATE_PRICE'; unit: number }
  | { type: 'SELECT_MESSAGE'; unit: number; message: string }
  | { type: 'INSERT_MESSAGE'; unit: number; message: string };

type MachineDispatch = Dispatch<MachineAction>;
type MachineState = IMachine[];

const MachineStateContext = createContext<MachineState | null>(null);
const MachineDispatchContext = createContext<MachineDispatch | null>(null);

function machineReducer(
  state: MachineState,
  action: MachineAction,
): MachineState {
  switch (action.type) {
    case 'SELECT_MESSAGE':
      return state;
    case 'INSERT_MESSAGE':
      return [...state, { unit: action.unit, message: action.message }];
    default:
      throw new Error('Unhandled action');
  }
}

export function MachineContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [machine, machineDispatch] = useReducer(machineReducer, []);

  return (
    <MachineDispatchContext.Provider value={machineDispatch}>
      <MachineStateContext.Provider value={machine}>
        {children}
      </MachineStateContext.Provider>
    </MachineDispatchContext.Provider>
  );
}

export function useMachineState() {
  const state = useContext(MachineStateContext);
  if (!state) throw new Error('Cannot find MachineContextProvider');
  return state;
}

export function useMachineDispatch() {
  const dispatch = useContext(MachineDispatchContext);
  if (!dispatch) throw new Error('Cannot find MachineContextProvider');
  return dispatch;
}
