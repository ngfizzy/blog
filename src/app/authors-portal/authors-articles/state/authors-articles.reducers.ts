import { AuthorsArticlesState } from './authors-articles.state';
import {
  AuthorsArticlesActionTypes,
  AuthorsArticlesActions,
} from './authors-articles.actions';
import { Article } from 'src/app/shared/models';

const defaultState: AuthorsArticlesState = {
  title: 'Authors Portal',
  error: '',
  isLoggedIn: false,
  authToken: '',
  audienceState: {
    isLoading: false,
    audience: null,
  },
  dashboardState: {} as any,
  isLoading: false,
  isArticlesListLoading: false,
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
    error: '',
    categories: [],
  },
  messagesState: {
    messages: {},
    isLoading: false,
    error: ''
  }
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
        articles: [...action.payload.articles ],
        isLoading: false,
        error: ''
      };
    case AuthorsArticlesActionTypes.GetArticlesError:
      return {
        ...state,
        isLoading: false,
      };
    case AuthorsArticlesActionTypes.CreateArticle:
      return { ...state, isArticlesListLoading: true };
    case AuthorsArticlesActionTypes.CreateArticleSuccess:
      return {
        ...state,
        articles: [{ ...action.payload.article }, ...state.articles],
        isArticlesListLoading: false,
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
        isArticlesListLoading: true,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
        },
        error: null,
      };
    case AuthorsArticlesActionTypes.DeleteArticleSuccess:
      return {
        ...state,
        isArticlesListLoading: false,
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
        isArticlesListLoading: false,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: false,
        },
        error: action.payload,
      };
    case AuthorsArticlesActionTypes.CreateArticleError:
      return {
        ...state,
        isArticlesListLoading: false,
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
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
          status: 'saving',
        },
      };
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
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
        },
      };
    case AuthorsArticlesActionTypes.RemoveArticleFromCategory:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
        },
        error: '',
      };
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
          isLoading: false,
        },
        error: ''
      };
    case AuthorsArticlesActionTypes.CategorizeArticleError:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
        },
        error: action.payload,
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
    case AuthorsArticlesActionTypes.ToggleCommentDelete:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          status: 'saving',
        },
        error: ''
       };
    case AuthorsArticlesActionTypes.ToggleCommentDeleteSuccess:
      const articles = [ ...state.articles ];
      const index = articles.findIndex((next) => next.id === action.payload.articleId);
      const article = { ...articles[index] };

      article.audienceActivities = [ ...action.payload.activities ];

      articles.splice(index, 1, article);

      return {
      ...state,
        articles,
        selectedArticle: {
          ...state.selectedArticle,
          article,
          status: 'saved',
        },
        error: ''
      };
    case AuthorsArticlesActionTypes.ToggleCommentDeleteError:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          // article: { ...state.selectedArticle.article },
          status: 'erred'
        },
        error: action.payload.error
      };
    default:
      return state;
  }
}
