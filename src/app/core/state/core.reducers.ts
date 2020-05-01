import { CoreState } from './core.state';
import { CoreActions, CoreActionTypes } from './core.actions';

const defaultState: CoreState = {
  audienceState: {
    isLoading: true,
    audience: null,
  }
};

export function coreReducer(state: CoreState = defaultState, action: CoreActions): CoreState {
  switch (action.type) {
    case CoreActionTypes.GetCurrentAudience:
      return state;
    case CoreActionTypes.GetCurrentAudienceSuccess:
      return {
        ...state,
        audienceState: {
          isLoading: false,
          audience: { ...action.payload }
        }
      };
      default:
        return state;
  }
}
