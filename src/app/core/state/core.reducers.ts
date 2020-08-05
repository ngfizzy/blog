import { CoreState } from './core.state';
import { CoreActions, CoreActionTypes } from './core.actions';

const defaultState: CoreState = {
  title: '',
  audienceState: {
    isLoading: true,
    audience: null,
    contacted: false,
  },
  navState: {
    isLoading: true,
    nav: null,
  },

};

export function coreReducer(
  state: CoreState = defaultState,
  action: CoreActions,
): CoreState {
  switch (action.type) {
    case CoreActionTypes.GetCurrentAudience:
      return state;
    case CoreActionTypes.GetCurrentAudienceSuccess:
      return {
        ...state,
        audienceState: {
          isLoading: false,
          audience: { ...action.payload.audience },
        },
      };
    case CoreActionTypes.GetCurrentAudienceError:
      return {
        ...state,
        audienceState: {
          ...state.audienceState,
          isLoading: false
        }
      };
    case CoreActionTypes.SetPageTitle:
      return {
        ...state,
        title: action.payload,
      };
    case CoreActionTypes.GetNav:
      return {
        ...state,
        navState: {
          ...state.navState,
          isLoading: true,
        },
      };
    case CoreActionTypes.GetNavSuccess:
      return {
        ...state,
        navState: {
          ...state.navState,
          nav: { ...action.payload },
        },
      };
    default:
      return state;
  }
}
