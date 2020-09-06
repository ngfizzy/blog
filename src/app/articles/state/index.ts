import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCoreState from '../../core/state';
import * as fromArticle from './articles.state';

export interface ArticleState  extends fromCoreState.CoreState {
  articles: fromArticle.ArticlesState;
}

const getArticleFeatureState = createFeatureSelector<fromArticle.ArticlesState>(
  'articles',
);

export const getOneArticle = createSelector(
  getArticleFeatureState,
  state => state.selectedArticle,
);

export const selectArticleModuleLoadingState = createSelector(
  getArticleFeatureState,
  state => state.isLoading,
);

export const selectArticleLoadingState = createSelector(
  getOneArticle,
  state => state.isLoading
);

export const selectArticle = createSelector(
  getOneArticle,
  state => state.article,
);

export const getSelectedArticleActivities = createSelector(
  selectArticle,
  article => article.audienceActivities,
);

export const getAllArticles = createSelector(
  getArticleFeatureState,
  state => state.articles,
);

export const isPublicArticlesLoading = createSelector(
  getArticleFeatureState,
  state => state.isLoading
)
