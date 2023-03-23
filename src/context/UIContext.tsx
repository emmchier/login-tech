import { createContext } from 'react';

interface UIContextProps {
  loading: boolean;

  // Methods
  showLoading: () => void;
  hideLoading: () => void;
}

export const UIContext = createContext({} as UIContextProps);
