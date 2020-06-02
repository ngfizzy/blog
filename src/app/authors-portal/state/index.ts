import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorsPortalState } from './authors-portal.state';

export * from './authors-portal.state';

const getAuthorsPortalState = createFeatureSelector<AuthorsPortalState>(
  'authorsPortal',
);

// export const getArticles = createSelector(
//   getDashboardState,
//   state => state.articles.articles,
// );

// export const getArticlesLoadingState = createSelector(
//   getDashboardState,
//   state => state.articles.isLoading,
// );

export const getDashboardState = createSelector(
  getAuthorsPortalState,
  state => state.dashboardState,
);

export const getArticleStatistics = createSelector(
  getDashboardState,
  dashboard => dashboard.articlesStatistics,
);

export const getTop10Articles = createSelector(
  getDashboardState,
  dashboard => dashboard.top10ArticlesState.articles,
);
