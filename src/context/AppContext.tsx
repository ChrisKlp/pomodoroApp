import { TSettings } from 'hooks/useSettings';
import { createContext, useCallback, useContext, useReducer } from 'react';

const initialState = {
  timers: [
    { name: 'pomodoro', value: 25 },
    {
      name: 'short break',
      value: 5,
    },
    {
      name: 'long break',
      value: 20,
    },
  ],
  fonts: ['Kumbh Sans', 'Roboto Slab', 'Space Mono'],
  colors: ['red', 'cyan', 'violet'],
  activeTimer: {
    name: 'pomodoro',
    value: 25,
  },
  activeColor: 'red',
  activeFont: 'Kumbh Sans',
  activeStep: 1,
  totalSteps: 9,
};

export type TState = typeof initialState;

type TAction =
  | {
      type: 'UPDATE';
      payload: TSettings;
    }
  | { type: 'SWITCH_TIMER'; payload: { name: string; value: number } };

type TContent = {
  state: TState;
  updateState: (settings: TSettings) => void;
  switchTimer: (name: string, value: number) => void;
};

const AppContext = createContext({});

export const useAppContext = (): TContent => {
  return useContext(AppContext) as TContent;
};

const reducer: React.Reducer<TState, TAction> = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        ...action.payload,
        activeTimer: action.payload.timers.filter(
          (timer) => timer.name === state.activeTimer.name
        )[0],
      };
    case 'SWITCH_TIMER':
      return {
        ...state,
        activeTimer: action.payload,
      };

    default:
      return state;
  }
};

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateState = useCallback(
    (settings: TSettings) => {
      dispatch({ type: 'UPDATE', payload: settings });
    },
    [dispatch]
  );

  const switchTimer = useCallback(
    (name: string, value: number) => {
      dispatch({ type: 'SWITCH_TIMER', payload: { name, value } });
    },
    [dispatch]
  );

  return (
    <AppContext.Provider
      value={{
        state,
        updateState,
        switchTimer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
