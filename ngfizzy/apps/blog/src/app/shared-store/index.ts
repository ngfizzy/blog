import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedStoreState } from './shared-store.state';

export const selectSharedStoreState = createFeatureSelector<SharedStoreState>('sharedStore');

export const featuredArticlesState = createSelector(
  selectSharedStoreState,
  state => state.featuredArticlesState
);

export const featuredArticles = createSelector(
  featuredArticlesState,
  state => state.articles
);

export const isFeaturedArticlesLoading = createSelector(
  featuredArticlesState,
  state => state.isLoading
);

export const featuredArticlesError = createSelector(
  featuredArticlesState,
  state => state.error
);

export { SharedStoreState } from './shared-store.state';
