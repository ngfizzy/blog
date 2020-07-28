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


// Top 10 Articles
export const getTop10ArticlesState = createSelector(
  getDashboardState,
  dashboard => dashboard.top10ArticlesState,
);

export const getTop10Articles = createSelector(
  getTop10ArticlesState,
  state => state.articles
);

export const isTop10ArticlesLoading = createSelector(
  getTop10ArticlesState,
  state => state.isLoading
);

export const getTop10ArticlesError = createSelector(
  getTop10ArticlesState,
  state => state.error
);

 // Last 10 Draft Selectors
export const getLast10DraftsState = createSelector(
  getDashboardState,
  dashboard => dashboard.last10DraftsState
);

export const getLast10Drafts = createSelector(
  getLast10DraftsState,
  state => state.drafts,
);

export const isLast10DraftsLoading = createSelector(
  getLast10DraftsState,
  state => state.isLoading
);

export const last10DraftsError = createSelector(
  getLast10DraftsState,
  state => state.error
);

export const getCategoriesSummaries = createSelector(
  getDashboardState,
  dashboard => dashboard.categoriesSummariesState.summaries,
);
