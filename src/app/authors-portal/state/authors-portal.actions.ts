import { Action } from '@ngrx/store';
import { ArticleStatistics } from '../authors-portal-shared/models';

export const enum AuthorsPortalActionTypes {
  GetAuthorsDashboardArticlesStatistics = '[Authors] Get Dashboard Article Statistics',
  GetAuthorsDashboardArticlesStatisticsSuccess = '[Authors] Get Dashboard Article Statistics Success',
}

export class GetAuthorsDashboardArticlesStatistics implements Action {
  readonly type =
    AuthorsPortalActionTypes.GetAuthorsDashboardArticlesStatistics;

  constructor() {}
}

export class GetAuthorsDashboardArticlesStatisticsSuccess implements Action {
  readonly type =
    AuthorsPortalActionTypes.GetAuthorsDashboardArticlesStatisticsSuccess;

  constructor(public payload: ArticleStatistics[]) {}
}

export type AuthorsPortalActions =
  | GetAuthorsDashboardArticlesStatistics
  | GetAuthorsDashboardArticlesStatisticsSuccess;
