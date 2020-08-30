import { ArticleStatisticsCollection } from './../authors-portal-shared/models';
import { Action } from '@ngrx/store';
import { ArticlesResponse } from '../../shared/models/graphql-responses/responses/articles-response.interface';
import { CategoriesSummariesResponse } from '../authors-portal-shared/models/graphql-responses/responses/categories-summaries-response.interface';
import { CategoryCreationResponse, MessagesResponse, LoginResponse } from '../authors-portal-shared/models/graphql-responses/responses';

export const enum AuthorsPortalActionTypes {
  GetAuthorsDashboardArticlesStatistics = '[Authors] Get Dashboard Article Statistics',
  GetAuthorsDashboardArticlesStatisticsSuccess = '[Authors] Get Dashboard Article Statistics Success',
  GetAuthorsDashboardArticleStatisticsError = '[Authors] Get Dashboard Article Statistics Error',
  GetTop10Articles = '[Authors] Get Top 10 Articles',
  GetTop10ArticlesSuccess = '[Authors] Get Top 10 Article Success',
  GetTop10ArticlesError = '[Authors] Get Top 10 Article Errors',
  GetLast10DraftsError = '[Authors] Get Top 10 Articles Error',
  GetLast10Drafts = '[Authors] Get Last 10 Drafts',
  GetLast10DraftsSuccess = '[Authors] Get Last 10 Drafts Success',
  GetCategoriesSummaries = '[Authors] Get Categories Summaries',
  GetCategoriesSummariesSuccess = '[Authors] Get Categories Summaries Success',
  GetCategoriesSummariesError = '[Authors] Get Categories Summaries Error',
  CreateCategory = '[Authors] Create Category',
  CreateCategorySuccess = '[Authors] Create Category Success',
  CreateCategoryError = '[Authors] Create Category Error',
  GetMessages = '[Authors] Get Messages',
  GetMessagesSuccess = '[Authors] Get Messages Success',
  GetMessagesError = '[Authors] Get Messages Error',
  Login = '[Authors] Login',
  LoginSuccess =  '[Authors] Login Success',
  LoginError = '[Authors] Login Error'
}

export class GetAuthorsDashboardArticlesStatistics implements Action {
  readonly type =
    AuthorsPortalActionTypes.GetAuthorsDashboardArticlesStatistics;

  constructor() {}
}

export class GetAuthorsDashboardArticlesStatisticsSuccess implements Action {
  readonly type =
    AuthorsPortalActionTypes.GetAuthorsDashboardArticlesStatisticsSuccess;

  constructor(public payload: ArticleStatisticsCollection) {}
}

export class GetAuthorsDashboardArticlesStatisticsError {
  readonly type = AuthorsPortalActionTypes.GetAuthorsDashboardArticleStatisticsError;

  constructor(public payload: string) {}
}

export class GetTop10Articles implements Action {
  readonly type = AuthorsPortalActionTypes.GetTop10Articles;
}

export class GetTop10ArticlesSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.GetTop10ArticlesSuccess;

  constructor(public payload: ArticlesResponse) {}
}

export class GetTop10ArticlesError implements Action {
  readonly type = AuthorsPortalActionTypes.GetTop10ArticlesError;

  constructor(public payload: string) {}
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

  constructor(public payload: CategoriesSummariesResponse) {}
}

export class GetCategoriesSummariesError implements Action {
  readonly type = AuthorsPortalActionTypes.GetCategoriesSummariesError;

  constructor(public payload: string) {}
}

export class CreateCategory implements Action {
  readonly type = AuthorsPortalActionTypes.CreateCategory;

  constructor(public payload: string) {}
}

export class CreateCategorySuccess implements Action {
  readonly type = AuthorsPortalActionTypes.CreateCategorySuccess;

  constructor(public payload: CategoryCreationResponse) {}
}

export class CreateCategoryError implements Action {
  readonly type = AuthorsPortalActionTypes.CreateCategoryError;

  constructor(public payload: string) {}
}

export class GetMessages implements Action {
  readonly type = AuthorsPortalActionTypes.GetMessages;
}

export class GetMessagesSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.GetMessagesSuccess;

  constructor(public payload: MessagesResponse) {}
}

export class GetMessagesError implements Action {
  readonly type = AuthorsPortalActionTypes.GetMessagesError;

  constructor(public payload: string) {}
}
export class Login implements Action {
  readonly type = AuthorsPortalActionTypes.Login;

  constructor(public payload: { username: string; password: string}) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.LoginSuccess;

  constructor(public payload: LoginResponse) {}
}

export class LoginError implements Action {
  readonly type = AuthorsPortalActionTypes.LoginError;

  constructor(public payload: string) {}
}

export type AuthorsPortalActions =
  | GetAuthorsDashboardArticlesStatistics
  | GetAuthorsDashboardArticlesStatisticsSuccess
  | GetAuthorsDashboardArticlesStatisticsError
  | GetTop10Articles
  | GetTop10ArticlesSuccess
  | GetTop10ArticlesError
  | GetLast10Drafts
  | GetLast10DraftsSuccess
  | GetLast10DraftsError
  | GetCategoriesSummaries
  | GetCategoriesSummariesSuccess
  | GetCategoriesSummariesError
  | CreateCategory
  | CreateCategorySuccess
  | CreateCategoryError
  | GetMessagesError
  | GetMessagesSuccess
  | GetMessages
  | LoginError
  | LoginSuccess
  | Login;
