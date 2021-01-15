import { Audience } from '@ngfizzy/entities';
import { AuthorsPortalState } from './authors-portal.state';
import {
  AuthorsPortalActionTypes,
  AuthorsPortalActions,
} from './authors-portal.actions';
import { Message } from '@ngfizzy/entities';

const defaultState: AuthorsPortalState = {
  title: '',
  error: '',
  isLoggedIn: false,
  authToken: '',
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
      error: '',
      summaries: [],
    },
  },
  categoriesState: {
    isLoading: true,
    categories: [],
    error: ''
  },
  audienceState: {
    isLoading: false,
    audience: {} as Audience,
  },
  navState: {
    isLoading: false,
    nav: null
  },
  messagesState: {
    isLoading: false,
    messages: {},
    error: ''
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
            summaries: [...action.payload.categoriesSummaries ],
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
            error: ''
          },
        },
        categoriesState: {
          ...state.categoriesState,
          categories: [...action.payload.categories],
          isLoading: false,
          error: ''
        },
      };
      case AuthorsPortalActionTypes.CreateCategoryError:
        return {
          ...state,
          dashboardState: {
            ...state.dashboardState,
            categoriesSummariesState: {
              ...state.dashboardState.categoriesSummariesState,
              isLoading: false,
              error: action.payload
            },
          },
          categoriesState: {
            ...state.categoriesState,
            isLoading: false,
            error: action.payload
          },
        };
    case AuthorsPortalActionTypes.GetMessages:
      return {
        ...state,
        messagesState: {
          ...state.messagesState,
          isLoading: true,
          error: ''
        }
      };
    case AuthorsPortalActionTypes.GetMessagesSuccess:

      return {
        ...state,
        messagesState: {
          ...state.messagesState,
          messages: {...action.payload.messages as Record<string, Message>},
          isLoading: false,
          error: ''
        }
      };
    case AuthorsPortalActionTypes.GetMessagesError:
      return {
        ...state,
        messagesState: {
          ...state.messagesState,
          isLoading: false,
          error: action.payload
        }
      };
    case AuthorsPortalActionTypes.Login:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case AuthorsPortalActionTypes.LoginSuccess:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: '',
      };
    case AuthorsPortalActionTypes.LoginError:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: action.payload
      };
    case AuthorsPortalActionTypes.AuthorizeUser:
      return {
        ...state,
        isLoggedIn: !!action.payload.authToken,
        authToken: action.payload.authToken
      };
    case AuthorsPortalActionTypes.Logout:
      return {
        ...state,
        isLoading: true,
      };
    case AuthorsPortalActionTypes.LogoutSuccess:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    case AuthorsPortalActionTypes.LogoutError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
