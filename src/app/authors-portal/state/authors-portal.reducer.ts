import { Audience } from './../../shared/models/audience.interface';
import { AuthorsPortalState } from './authors-portal.state';
import {
  AuthorsPortalActionTypes,
  AuthorsPortalActions,
} from './authors-portal.actions';

const defaultState: AuthorsPortalState = {
  title: '',
  dashboardState: {
    isLoading: true,
    articlesStatisticsState: {
      statistics: null,
      isLoading: false,
      error: ''
    },
    top10ArticlesState: {
      isLoading: true,
      articles: [],
      error: ''
    },
    last10DraftsState: {
      drafts: [],
      isLoading: false,
      error: ''
    },
    categoriesSummariesState: {
      isLoading: true,
      summaries: [],
    },
  },
  categoriesState: {
    isLoading: true,
    categories: [],
  },
  audienceState: {
    isLoading: false,
    audience: {} as Audience,
  },
  navState: {
    isLoading: false,
    nav: null
  },
  isLoading: true,
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
          articlesStatisticsState: {
            ...state.dashboardState.articlesStatisticsState,
            isLoading: true,
            error: ''
          },
        },
        isLoading: false,
      };
    case AuthorsPortalActionTypes.GetAuthorsDashboardArticlesStatisticsSuccess:
      const { error, ...statistics } = action.payload;

      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          isLoading: false,
          articlesStatisticsState: {
            ...state.dashboardState.articlesStatisticsState,
            statistics,
            isLoading: false,
            error: '',
          }
        },
        isLoading: false,
      };
    case AuthorsPortalActionTypes.GetAuthorsDashboardArticleStatisticsError:
      return {
        ...state,
        isLoading: false,
        dashboardState: {
          ...state.dashboardState,
          isLoading: false,
          articlesStatisticsState: {
            ...state.dashboardState.articlesStatisticsState,
            isLoading: false,
            ...state.dashboardState,
            error: action.payload,
          }
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
            error: '',
          },
        },
      };
    case AuthorsPortalActionTypes.GetTop10ArticlesError:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          top10ArticlesState: {
            ...state.dashboardState.top10ArticlesState,
            isLoading: true,
            error: action.payload
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
            articles: [...action.payload.articles],
            isLoading: false,
            error: ''
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
            articles: [...action.payload.articles],
            isLoading: false,
            error: ''
          },
        },
      };
    case AuthorsPortalActionTypes.GetLast10Drafts:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          last10DraftsState: {
            ...state.dashboardState.last10DraftsState,
            isLoading: true,
            error: ''
          },
        },
      };
    case AuthorsPortalActionTypes.GetLast10DraftsSuccess:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          last10DraftsState: {
            ...state.dashboardState.last10DraftsState,
            drafts: [...action.payload.articles],
            isLoading: false,
          },
        },
      };
    case AuthorsPortalActionTypes.GetLast10DraftsError:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          last10DraftsState: {
            ...state.dashboardState.last10DraftsState,
            isLoading: false,
            error: action.payload,
          },
        },
      };
    case AuthorsPortalActionTypes.GetCategoriesSummaries:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          categoriesSummariesState: {
            ...state.dashboardState.categoriesSummariesState,
            isLoading: true,
          },
        },
      };
    case AuthorsPortalActionTypes.GetCategoriesSummariesSuccess:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          categoriesSummariesState: {
            ...state.dashboardState.categoriesSummariesState,
            summaries: [...action.payload],
            isLoading: false,
          },
        },
      };
    case AuthorsPortalActionTypes.CreateCategory:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          categoriesSummariesState: {
            ...state.dashboardState.categoriesSummariesState,
            isLoading: true,
          },
        },
        categoriesState: {
          ...state.categoriesState,
          isLoading: true,
        },
      };
    case AuthorsPortalActionTypes.CreateCategorySuccess:
      return {
        ...state,
        dashboardState: {
          ...state.dashboardState,
          categoriesSummariesState: {
            ...state.dashboardState.categoriesSummariesState,
            summaries: [...action.payload.categoriesSummaries],
            isLoading: false,
          },
        },
        categoriesState: {
          ...state.categoriesState,
          categories: [...action.payload.categories],
          isLoading: false,
        },
      };
    default:
      return state;
  }
}
