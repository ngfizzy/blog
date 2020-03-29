import { PoetryState } from './poetry.state';
import { PoetryActions, PoetryActionTypes } from './poetry.actions';

const defaultState: PoetryState = {
  isLoading: false,
  poems: [],
  selectedPoem: {
    isLoading: false,
    poem: null
  },
};

export function poetryReducers(
  state = defaultState,
  action: PoetryActions,
): PoetryState {
  switch (action.type) {
    case PoetryActionTypes.GetAllPoems:
      return { ...state, isLoading: true };
    case PoetryActionTypes.GetAllPoemsSuccess:
      return {
        ...state,
        poems: [ ...action.payload ],
        isLoading: false,
      };
    case PoetryActionTypes.GetPoem:
      return {
        ...state,
        selectedPoem: {
          ...state.selectedPoem,
          isLoading: true,
        }
      };
    case PoetryActionTypes.GetPoemSuccess:
      return {
        ...state,
        selectedPoem: {
          poem: action.payload,
          isLoading: false,
        },
      };
    default:
      return state;
  }
}
