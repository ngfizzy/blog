import { CategorySummary } from './../authors-portal-shared/models';
import { Action } from '@ngrx/store';
import { ArticleStatistics } from '../authors-portal-shared/models';
import { Article, Category } from 'src/app/shared/models';
import { ArticlesResponse } from '../authors-portal-shared/models/graphql-responses/articles-response.interface';

export const enum AuthorsPortalActionTypes {
  GetAuthorsDashboardArticlesStatistics = '[Authors] Get Dashboard Article Statistics',
  GetAuthorsDashboardArticlesStatisticsSuccess = '[Authors] Get Dashboard Article Statistics Success',
  GetTop10Articles = '[Authors] Get Top 10 Articles',
  GetTop10ArticlesSuccess = '[Authors] Get Top 10 Article Success',
  GetLast10DraftsError = '[Authors] Get Top 10 Articles Error',
  GetLast10Drafts = '[Authors] Get Last 10 Drafts',
  GetLast10DraftsSuccess = '[Authors] Get Last 10 Drafts Success',
  GetCategoriesSummaries = '[Authors] Get Categories Summaries',
  GetCategoriesSummariesSuccess = '[Authors] Get Categories Summaries Success',
  CreateCategory = '[Authors] Create Category',
  CreateCategorySuccess = '[Authors] Create Category Success',
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

export class GetLast10Drafts implements Action {
  readonly type = AuthorsPortalActionTypes.GetLast10Drafts;

  constructor() {}
}

export class GetLast10DraftsSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.GetLast10DraftsSuccess;

  constructor(public payload: ArticlesResponse) {}
}

export class GetLast10DraftsError implements Action {
  readonly type = AuthorsPortalActionTypes.GetLast10DraftsError;

  constructor(public payload: string) {}
}

export class GetCategoriesSummaries implements Action {
  readonly type = AuthorsPortalActionTypes.GetCategoriesSummaries;

  constructor() {}
}

export class GetCategoriesSummariesSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.GetCategoriesSummariesSuccess;

  constructor(public payload: CategorySummary[]) {}
}

export class CreateCategory implements Action {
  readonly type = AuthorsPortalActionTypes.CreateCategory;

  constructor(public payload: string) {}
}

export class CreateCategorySuccess implements Action {
  readonly type = AuthorsPortalActionTypes.CreateCategorySuccess;

  constructor(
    public payload: {
      createdCategory: Category;
      categories: Category[];
      categoriesSummaries: CategorySummary[];
    },
  ) {}
}

export type AuthorsPortalActions =
  | GetAuthorsDashboardArticlesStatistics
  | GetAuthorsDashboardArticlesStatisticsSuccess
  | GetTop10Articles
  | GetTop10ArticlesSuccess
  | GetLast10Drafts
  | GetLast10DraftsSuccess
  | GetLast10DraftsError
  | GetCategoriesSummaries
  | GetCategoriesSummariesSuccess
  | CreateCategory
  | CreateCategorySuccess;
