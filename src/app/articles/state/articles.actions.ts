import { Action } from '@ngrx/store';

import {
  ApplaudPayload,
  CommentPayload,
  Category,
  Article,
} from 'src/app/shared/models';
import { ArticlesResponse, AudienceActivitiesResponse, ArticleResponse } from 'src/app/shared/models/graphql-responses/responses';

export const enum ArticlesActionTypes {
  GetAllArticles = '[Articles] Get All Articles',
  GetAllArticlesSuccess = '[Articles] Get All Article Success',
  GetAllArticlesFailure = '[Articles] Get All Article Failure',
  GetOneArticle = '[Articles] Get One Article',
  GetOneArticleSuccess = '[Articles] Get One Article Success',
  GetOneArticleFailure = '[Articles] Get One Article Failure',
  GetCategoryArticles = '[Articles] Get Category Articles',
  GetCategoryArticlesSuccess = '[Articles] Get Category Articles Success',
  Applaud = '[Articles] Applaud',
  ApplaudSuccess = '[Articles] Applaud Success',
  ApplaudFailure = '[Article] Applaud Failure',
  AddComment = '[Articles] Add Comment',
  AddCommentSuccess = '[Articles] Add Comment Success',
  AddCommentFailure = '[Articles] Add Comment Failure',
}

export class GetAllArticles implements Action {
  readonly type = ArticlesActionTypes.GetAllArticles;
}

export class GetAllArticlesSuccess implements Action {
  readonly type = ArticlesActionTypes.GetAllArticlesSuccess;

  constructor(public payload: ArticlesResponse) {}
}

export class GetAllArticlesFailure implements Action {
  readonly type = ArticlesActionTypes.GetAllArticlesFailure;

  constructor(public payload: string) {}
}

export class GetCategoryArticles {
  readonly type = ArticlesActionTypes.GetCategoryArticles;

  constructor(public payload: number) {}
}

export class GetCategoryArticlesSuccess {
  readonly type = ArticlesActionTypes.GetCategoryArticlesSuccess;

  constructor(public payload: Article[]) {}
}

export class GetOneArticle implements Action {
  readonly type = ArticlesActionTypes.GetOneArticle;

  constructor(public payload: number) {}
}

export class GetOneArticleSuccess implements Action {
  readonly type = ArticlesActionTypes.GetOneArticleSuccess;

  constructor(public payload: ArticleResponse) {}
}

export class GetOneArticleFailure implements Action {
  readonly type = ArticlesActionTypes.GetOneArticleFailure;

  constructor(public payload: string) {}
}

export class Applaud implements Action {
  readonly type = ArticlesActionTypes.Applaud;

  constructor(public payload: ApplaudPayload) {}
}

export class ApplaudSuccess implements Action {
  readonly type = ArticlesActionTypes.ApplaudSuccess;

  constructor(public payload: AudienceActivitiesResponse) {}
}

export class ApplaudFailure implements Action {
  readonly type = ArticlesActionTypes.ApplaudFailure;

  constructor(public payload: string) {}
}

export class AddComment implements Action {
  readonly type = ArticlesActionTypes.AddComment;

  constructor(public payload: CommentPayload) {}
}

export class AddCommentSuccess implements Action {
  readonly type = ArticlesActionTypes.AddCommentSuccess;

  constructor(public payload: AudienceActivitiesResponse) {}
}

export class AddCommentFailure implements Action {
  readonly type = ArticlesActionTypes.AddCommentFailure;

  constructor(public payload: string) {}
}

export type ArticlesActions =
  | GetAllArticles
  | GetAllArticlesSuccess
  | GetAllArticlesFailure
  | GetOneArticle
  | GetOneArticleSuccess
  | GetOneArticleFailure
  | Applaud
  | ApplaudSuccess
  | ApplaudFailure
  | AddComment
  | AddCommentSuccess
  | GetCategoryArticles
  | GetCategoryArticlesSuccess;
