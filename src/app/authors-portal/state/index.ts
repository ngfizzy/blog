import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorsPortalState } from './authors-portal.state';

export * from './authors-portal.state';

const getAuthorsPortalState = createFeatureSelector<AuthorsPortalState>(
  'authorsPortal',
);

export const getDashboardState = createSelector(
  getAuthorsPortalState,
  state => state.dashboardState,
);

export const getArticleStatisticsState = createSelector(
  getDashboardState,
  state => state.articlesStatisticsState,
)

export const getArticleStatistics = createSelector(
  getArticleStatisticsState,
  state => state.statistics,
);

export const isArticleStatisticsLoading = createSelector(
  getArticleStatisticsState,
  state => state.isLoading
);

export const selectArticleStatisticsError = createSelector(
  getArticleStatisticsState,
  state => state.error
);

export const getTop10Articles = createSelector(
  getDashboardState,
  dashboard => dashboard.top10ArticlesState.articles,
);

export const getLast10Drafts = createSelector(
  getDashboardState,
  dashboard => dashboard.last10DraftsState.drafts,
);

export const getCategoriesSummaries = createSelector(
  getDashboardState,
  dashboard => dashboard.categoriesSummariesState.summaries,
);
