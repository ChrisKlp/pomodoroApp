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
  activeTimer: 'pomodoro',
  activeColor: 'red',
  activeFont: 'Kumbh Sans',
  activeStep: 1,
  totalSteps: 9,
};

export type TState = typeof initialState;

type TAction =
  | { type: 'NEXT_STEP' }
  | { type: 'ACTIVE_TIMER' }
  | {
      type: 'UPDATE';
      payload: TSettings;
    };

type TContent = {
  state: TState;
  setNextStep: () => void;
  setActiveTimer: () => void;
  updateState: (settings: TSettings) => void;
};

const AppContext = createContext({});

export const useAppContext = (): TContent => {
  return useContext(AppContext) as TContent;
};

const reducer: React.Reducer<TState, TAction> = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        activeStep: state.activeStep === 9 ? 1 : state.activeStep + 1,
      };
    case 'ACTIVE_TIMER':
      let activeTimer: string;

      if (state.activeTimer === 'pomodoro') activeTimer = 'short break';
      else if (state.activeTimer === 'short break' && state.activeStep < 9)
        activeTimer = 'pomodoro';
      else activeTimer = 'long break';

      return {
        ...state,
        activeTimer,
      };
    case 'UPDATE':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setNextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
  }, [dispatch]);

  const setActiveTimer = useCallback(() => {
    dispatch({ type: 'ACTIVE_TIMER' });
  }, [dispatch]);

  const updateState = useCallback(
    (settings: TSettings) => {
      dispatch({ type: 'UPDATE', payload: settings });
    },
    [dispatch]
  );

  return (
    <AppContext.Provider
      value={{
        state,
        setNextStep,
        setActiveTimer,
        updateState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
