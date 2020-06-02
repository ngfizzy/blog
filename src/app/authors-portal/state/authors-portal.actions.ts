import { Action } from '@ngrx/store';
import { ArticleStatistics } from '../authors-portal-shared/models';
import { Article } from 'src/app/shared/models';

export const enum AuthorsPortalActionTypes {
  GetAuthorsDashboardArticlesStatistics = '[Authors] Get Dashboard Article Statistics',
  GetAuthorsDashboardArticlesStatisticsSuccess = '[Authors] Get Dashboard Article Statistics Success',
  GetTop10Articles = '[Authors] Get Top 10 Articles',
  GetTop10ArticlesSuccess = '[Authors] Get Top 10 Article Success',
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

export class GetTop10Articles implements Action {
  readonly type = AuthorsPortalActionTypes.GetTop10Articles;
}

export class GetTop10ArticlesSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.GetTop10ArticlesSuccess;

  constructor(public payload: Article[]) {}
}

export type AuthorsPortalActions =
  | GetAuthorsDashboardArticlesStatistics
  | GetAuthorsDashboardArticlesStatisticsSuccess
  | GetTop10Articles
  | GetTop10ArticlesSuccess;
