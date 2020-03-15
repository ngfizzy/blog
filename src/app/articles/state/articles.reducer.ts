import { ArticlesState } from './articles.state';
import { ArticlesActions, ArticlesActionTypes } from './articles.actions';
import { Article } from 'src/app/shared/models';


const defaultState: ArticlesState = {
    articles: [],
    selectedArticle: {
      isLoading: true,
      article: { } as Article,
    },
    isLoading: true
};

export function articlesReducer(state: ArticlesState = defaultState, action: ArticlesActions): ArticlesState {
  switch (action.type) {
    case ArticlesActionTypes.GetAllArticles:
      return {
        ...state,
        isLoading: true,
      };
    case ArticlesActionTypes.GetAllArticlesSuccess:
      return {
        ...state,
        articles: [ ...action.payload],
        isLoading: false,
      };
    case ArticlesActionTypes.GetOneArticle:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          isLoading: true,
        }
      };
    case ArticlesActionTypes.GetOneArticleSuccess:
      return {
        ...state,
        selectedArticle: {
          article: { ...action.payload },
          isLoading: false,
        },
      };
    default:
      return state;
  }
}
