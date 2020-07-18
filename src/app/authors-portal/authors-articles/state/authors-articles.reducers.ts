import { AuthorsArticlesState } from './authors-articles.state';
import {
  AuthorsArticlesActionTypes,
  AuthorsArticlesActions,
} from './authors-articles.actions';
import { Article } from 'src/app/shared/models';

const defaultState: AuthorsArticlesState = {
  title: 'Authors Portal',
  error: '',
  audienceState: {
    isLoading: false,
    audience: null,
  },
  dashboardState: {} as any,
  isLoading: false,
  articles: [],
  selectedArticle: {
    isLoading: false,
    status: 'saved',
    article: { title: '', body: '' } as Article,
  },
  navState: {
    isLoading: true,
    nav: null,
  },
  categoriesState: {
    isLoading: true,
    categories: [],
  },
};

export function authorsArticlesReducers(
  state: AuthorsArticlesState = defaultState,
  action: AuthorsArticlesActions,
): AuthorsArticlesState {
  switch (action.type) {
    case AuthorsArticlesActionTypes.GetArticles:
      return {
        ...state,
        isLoading: true,
      };
    case AuthorsArticlesActionTypes.GetArticlesSuccess:
      return {
        ...state,
        articles: [...action.payload],
        isLoading: false,
        error: ''
      };
    case AuthorsArticlesActionTypes.GetArticlesError:
      return {
        ...state,
        isLoading: false,
      };
    case AuthorsArticlesActionTypes.CreateArticle:
      return state;
    case AuthorsArticlesActionTypes.CreateArticleSuccess:
      return {
        ...state,
        articles: [{ ...action.payload.article }, ...state.articles],
        selectedArticle: {
          article: { ...action.payload.article },
          isLoading: false,
          status: 'saved',
        },
        isLoading: false,
      };
    case AuthorsArticlesActionTypes.DeleteArticle:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
        },
        error: null,
      };
    case AuthorsArticlesActionTypes.DeleteArticleSuccess:
      return {
        ...state,
        articles: [ ...action.payload.articles ],
        selectedArticle: {
          ...state.selectedArticle,
          article: { ...action.payload.articles[0] },
          isLoading: false,
        },
        error: null,
      };
    case AuthorsArticlesActionTypes.DeleteArticleError:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: false,
        },
        error: action.payload,
      };
    case AuthorsArticlesActionTypes.CreateArticleError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AuthorsArticlesActionTypes.ViewArticle:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
          status: 'saving',
        },
      };
    case AuthorsArticlesActionTypes.ViewArticleSuccess:
      return {
        ...state,
        selectedArticle: {
          article: { ...action.payload },
          isLoading: false,
          status: 'saved',
        },
      };
    case AuthorsArticlesActionTypes.EditArticleTitle:
    case AuthorsArticlesActionTypes.EditArticleBody:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
          status: 'saving',
        },
      };
    case AuthorsArticlesActionTypes.EditArticleTitleSuccess:
      return {
        ...state,
        articles: [...action.payload.articles],
        selectedArticle: {
          ...state.selectedArticle,
          article: { ...action.payload.selectedArticle },
          isLoading: false,
          status: 'saved',
        },
      };
    case AuthorsArticlesActionTypes.EditArticleTitleError:
      return {
        ...state,
        error: action.payload
      };
    case AuthorsArticlesActionTypes.EditArticleBodySuccess:
      return {
        ...state,
        articles: [...action.payload.articles],
        selectedArticle: {
          ...state.selectedArticle,
          article: { ...action.payload.selectedArticle },
          isLoading: false,
          status: 'saved',
        },
      };
    case AuthorsArticlesActionTypes.EditArticleBodyError:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case AuthorsArticlesActionTypes.ChangeArticleStatus:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          status: action.payload,
        },
      };
    case AuthorsArticlesActionTypes.TagArticle:
      return state;
    case AuthorsArticlesActionTypes.UntagArticle:
      return state;
    case AuthorsArticlesActionTypes.TagArticleSuccess:
    case AuthorsArticlesActionTypes.UntagArticleSuccess:
      return {
        ...state,
        articles: [...action.payload.articles],
        selectedArticle: {
          ...state.selectedArticle,
          article: {
            ...action.payload.selectedArticle,
            tags: [...action.payload.selectedArticle.tags],
          },
        },
      };
    case AuthorsArticlesActionTypes.CategorizeArticle:
      return state;
    case AuthorsArticlesActionTypes.RemoveArticleFromCategory:
      return state;
    case AuthorsArticlesActionTypes.CategorizeArticleSuccess:
      return {
        ...state,
        articles: [...action.payload.articles],
        selectedArticle: {
          ...state.selectedArticle,
          article: {
            ...action.payload.selectedArticle,
            categories: [...action.payload.selectedArticle.categories],
          },
        },
      };
    case AuthorsArticlesActionTypes.TogglePublished:
      return state;
    case AuthorsArticlesActionTypes.TogglePublishedSuccess:
      return {
        ...state,
        articles: [...action.payload.articles],
        selectedArticle: {
          ...state.selectedArticle,
          article: { ...action.payload.selectedArticle },
        },
      };
    default:
      return state;
  }
}
