import { FCC } from '../types';

import { useReducer } from 'react';
import { UIContext } from '../context/UIContext';
import { uiReducer } from '../context/uiReducer';

export interface UIState {
  loading: boolean;
}

const INITIAL_STATE: UIState = {
  loading: false,
};

export const UIProvider: FCC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const showLoading = () => dispatch({ type: '[UI] - showLoading' });
  const hideLoading = () => dispatch({ type: '[UI] - hideLoading' });

  return (
    <UIContext.Provider
      value={{
        ...state,
        showLoading,
        hideLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
