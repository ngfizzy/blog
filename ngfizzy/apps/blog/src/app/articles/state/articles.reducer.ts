import { ArticlesState } from './articles.state';
import { ArticlesActions, ArticlesActionTypes } from './articles.actions';
import { Article } from '@ngfizzy/entities';

const defaultState: ArticlesState = {
  title: '',
  articles: [],
  selectedArticle: {
    isLoading: true,
    article: {} as Article,
    activitiesState: {
      isLoading: true,
      error: '',
      activities: [],
    },
  },
  audienceState: {
    audience: null,
    isLoading: true,
    contacted: false,
  },
  navState: {
    isLoading: true,
    nav: null,
  },
  error: '',
  isLoading: true,
};

export function articlesReducer(
  state: ArticlesState = defaultState,
  action: ArticlesActions,
): ArticlesState {
  switch (action.type) {
    case ArticlesActionTypes.GetAllArticles:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case ArticlesActionTypes.GetAllArticlesSuccess:
      return {
        ...state,
        articles: [...action.payload.articles],
        selectedArticle: {
          ...state.selectedArticle
        },
        isLoading: false,
        error: ''
      };
    case ArticlesActionTypes.GetAllArticlesFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ArticlesActionTypes.GetOneArticle:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
        },
      };
    case ArticlesActionTypes.GetOneArticleSuccess:
      return {
        ...state,
        selectedArticle: {
          article: { ...action.payload.article },
          activitiesState: {
            activities: [...action.payload.article.audienceActivities ],
            isLoading: false,
            error: ''
          },
          isLoading: false,
        },
      };
    case ArticlesActionTypes.GetOneArticleFailure:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          activitiesState: {
            ...state.selectedArticle.activitiesState,
            activities: [ ...state.selectedArticle.activitiesState.activities ],
            isLoading: false,
            error: action.payload
          }
        }
      };
    case ArticlesActionTypes.Applaud:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          activitiesState: {
            ...state.selectedArticle.activitiesState,
            isLoading: true,
          },
          isLoading: false,
        },
      };
    case ArticlesActionTypes.ApplaudSuccess: {
      const { articleId, activities } = action.payload;
      const index = state.articles.findIndex(a => a.id === articleId);
      const article = {
        ...state.articles[index],
        audienceActivities: [...activities]
      };
      const articles = [ ...state.articles];
      articles[index] = article;

      return {
        ...state,
        articles: [ ...articles ],
        selectedArticle: {
          ...state.selectedArticle,
          article: { ...article },
          activitiesState: {
            ...state.selectedArticle.activitiesState,
            activities: [...activities],
            isLoading: false,
          },
        },
      };
    }
    case ArticlesActionTypes.AddComment:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          article: {
            ...state.selectedArticle.article,
          },
          activitiesState: {
            ...state.selectedArticle.activitiesState,
            isLoading: true,
          },
        },
      };
    case ArticlesActionTypes.AddCommentSuccess: {
      const articleIndex = state.articles.findIndex(
        art => art.id === action.payload.articleId,
      );
      const article: Article = {
        ...state.articles[articleIndex],
        audienceActivities: [...action.payload.activities ],
      };
      const articles = [...state.articles];

      articles[articleIndex] = article;

      return {
        ...state,
        articles,
        selectedArticle: {
          ...state.selectedArticle,
          article,
          isLoading: false,
        },
      };
    }
    default:
      return state;
  }
}
