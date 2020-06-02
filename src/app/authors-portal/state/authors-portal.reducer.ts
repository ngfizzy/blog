import { ArticleStatistics } from './../authors-portal-shared/models/article-statistics.interface';
import { Audience } from './../../shared/models/audience.interface';
import { AuthorsPortalState } from './authors-portal.state';
import {
  AuthorsPortalActionTypes,
  AuthorsPortalActions,
} from './authors-portal.actions';

const defaultState: AuthorsPortalState = {
  dashboardState: {
    isLoading: true,
    articlesStatistics: [],
    top10ArticlesState: {
      isLoading: true,
      articles: [],
    },
  },
  isLoading: true,
  audienceState: {
    isLoading: false,
    audience: {} as Audience,
  },
};

export function authorsPortalReducer(
  state: AuthorsPortalState = defaultState,
  action: AuthorsPortalActions,
): AuthorsPortalState {
  switch (action.type) {
    case AuthorsPortalActionTypes.GetAuthorsDashboardArticlesStatistics:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          isLoading: true,
          articlesStatistics: [],
        },
        isLoading: false,
      };
    case AuthorsPortalActionTypes.GetAuthorsDashboardArticlesStatisticsSuccess:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          isLoading: false,
          articlesStatistics: [...action.payload],
        },
        isLoading: false,
      };
    case AuthorsPortalActionTypes.GetTop10Articles:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          top10ArticlesState: {
            ...state.dashboardState.top10ArticlesState,
            isLoading: true,
          },
        },
      };
    case AuthorsPortalActionTypes.GetTop10Articles:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          top10ArticlesState: {
            ...state.dashboardState.top10ArticlesState,
            isLoading: true,
          },
        },
      };
    case AuthorsPortalActionTypes.GetTop10Articles:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          top10ArticlesState: {
            ...state.dashboardState.top10ArticlesState,
            isLoading: true,
          },
        },
      };
    case AuthorsPortalActionTypes.GetTop10ArticlesSuccess:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          top10ArticlesState: {
            ...state.dashboardState.top10ArticlesState,
            articles: [...action.payload],
            isLoading: false,
          },
        },
      };
    default:
      return state;
  }
}
