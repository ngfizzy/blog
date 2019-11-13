import { AuthorsPortalState } from './authors-portal.state';
import { AuthorsPortalActionTypes, AuthorsPortalActions } from './authors-portal.actions';


const defaultState: AuthorsPortalState = {
  dashboard: null,
  isLoading: true,
};

export function authorsPortalReducer(state: AuthorsPortalState = defaultState, action: AuthorsPortalActions ) {
  switch (action.type) {
    case AuthorsPortalActionTypes.GetDashboard:
      return { ...state, isLoading: true };
    case AuthorsPortalActionTypes.GetDashboardSuccess:
      return {
        ...state,
        dashboard: { ...action.payload },
        isLoading: false,
      };
    default:
      return state;
  }
}
