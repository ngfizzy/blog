import * as fromAuthorsPortal from '../../state';
import * as fromAuthorsPortalState from './authors-articles.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface AuthorsArticlesState extends fromAuthorsPortal.AuthorsPortalState {
  articles: fromAuthorsPortalState.AuthorsArticlesState;
}


const getArticlesState = createFeatureSelector<fromAuthorsPortalState.AuthorsArticlesState>(
  'articles'
);

export const getArticles = createSelector(
  getArticlesState,
  state => state.articles
);

export const viewArticleState = createSelector(
  getArticlesState,
  state => state.selectedArticle,
);

export const viewArticle = createSelector(
  viewArticleState,
  state => state.article
);

export const isArticleLoading = createSelector(
  viewArticleState,
  state => state.isLoading
);

export const getArticleTitle = createSelector(
  viewArticle,
  article => article.title
);

export const getArticlesLoadingState = createSelector(
  getArticlesState,
  state => state.isLoading
);

export const selectArticleStatus = createSelector(
  viewArticleState,
  state => state.status
);

export const isArticlesListLoading = createSelector(
  getArticlesState,
  state => state.isArticlesListLoading
);
