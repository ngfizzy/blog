import { createReducer, on } from '@ngrx/store';
import { SharedStoreState } from './shared-store.state';
import * as sharedActions from './shared-store.actions';

const initialState: SharedStoreState = {
  navState: null,
  featuredArticlesState: {
    isLoading: false,
    articles: [],
    error: ''
  },
  audienceState: null,
  title: ''
};

export const reducer = createReducer(
  initialState,
  on(
    sharedActions.getFeaturedArticles,
    (state) => ({
      ...state,
      featuredArticlesState: {
        ...state.featuredArticlesState,
        isLoading: true,
        error: ''
      }
    }),
  ),
  on(
    sharedActions.getFeaturedArticlesSuccess,
    (state, payload) => ({
      ...state,
      featuredArticlesState: {
        ...state.featuredArticlesState,
        isLoading: false,
        articles: payload.articles,
        error: ''
      }
    }),
  ),
  on(
    sharedActions.getFeaturedArticlesError,
    (state, { payload }) => ({
      ...state,
      featuredArticlesState: {
        ...state.featuredArticlesState,
        isLoading: false,
        error: payload
      }
    }),
  )
);
