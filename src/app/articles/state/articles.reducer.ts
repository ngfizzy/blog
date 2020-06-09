import { ArticlesState } from './articles.state';
import { ArticlesActions, ArticlesActionTypes } from './articles.actions';
import { Article } from 'src/app/shared/models';

const defaultState: ArticlesState = {
  title: '',
  articles: [],
  selectedArticle: {
    isLoading: true,
    article: {} as Article,
    activitiesState: {
      isLoading: true,
      activities: [],
    },
  },
  audienceState: {
    audience: null,
    isLoading: true,
  },
  isLoading: true,
};

export function articlesReducer(
  state: ArticlesState = defaultState,
  action: ArticlesActions
): ArticlesState {
  switch (action.type) {
    case ArticlesActionTypes.GetAllArticles:
      return {
        ...state,
        isLoading: true,
      };
    case ArticlesActionTypes.GetAllArticlesSuccess:
      return {
        ...state,
        articles: [...action.payload],
        isLoading: false,
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
          article: { ...action.payload },
          activitiesState: {
            ...state.selectedArticle.activitiesState,
            isLoading: false,
          },
          isLoading: false,
        },
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
      const index = state.articles.findIndex((a) => a.id === articleId);
      const article = state.articles[index];

      article.audienceActivities = activities;
      state.articles[index] = article;

      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          article: {
            ...article,
            audienceActivities: [
              ...state.selectedArticle.article.audienceActivities,
            ],
          },
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
            audienceActivities: [
              ...state.selectedArticle.article.audienceActivities,
            ],
          },
          activitiesState: {
            ...state.selectedArticle.activitiesState,
            isLoading: true,
          },
        },
      };
    case ArticlesActionTypes.AddCommentSuccess: {
      const articleIndex = state.articles.findIndex(
        (art) => art.id === action.payload.articleId
      );

      const article = state.articles[articleIndex];

      article.audienceActivities = [...action.payload.activities];
      state.articles[articleIndex] = article;

      return {
        ...state,
        articles: [...state.articles],
        selectedArticle: {
          ...state.selectedArticle,
          article: { ...article },
          isLoading: false,
        },
      };
    }
    default:
      return state;
  }
}
