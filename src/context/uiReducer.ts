import { UIState } from '../providers/UIContextProvider';

type UIActionType = { type: '[UI] - showLoading' } | { type: '[UI] - hideLoading' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - showLoading':
      return {
        ...state,
        loading: true,
      };
    case '[UI] - hideLoading':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
