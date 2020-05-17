import { Action } from '@ngrx/store';

import { Article } from '../../shared/models/article.interface';
import {
  ApplaudPayload,
  AudienceActivity,
  AudienceActivityUpdateSuccessPayload,
  CommentPayload,
} from 'src/app/shared/models';

export const enum ArticlesActionTypes {
  GetAllArticles = '[Articles] Get All Articles',
  GetAllArticlesSuccess = '[Articles] Get All Article Success',
  GetAllArticlesFailure = '[Articles] Get All Article Failure',
  GetOneArticle = '[Articles] Get One Article',
  GetOneArticleSuccess = '[Articles] Get One Article Success',
  GetOneArticleFailure = '[Articles] Get One Article Failure',
  Applaud = '[Articles] Applaud',
  ApplaudSuccess = '[Articles] Applaud Success',
  AddComment = '[Articles] Add Comment',
  AddCommentSuccess = '[Articles] Add Comment Success',
}

export class GetAllArticles implements Action {
  readonly type = ArticlesActionTypes.GetAllArticles;
}

export class GetAllArticlesSuccess implements Action {
  readonly type = ArticlesActionTypes.GetAllArticlesSuccess;

  constructor(public payload: Article[]) {}
}

export class GetAllArticlesFailure implements Action {
  readonly type = ArticlesActionTypes.GetAllArticlesFailure;

  constructor(public payload: string) {}
}

export class GetOneArticle implements Action {
  readonly type = ArticlesActionTypes.GetOneArticle;

  constructor(public payload: number) {}
}

export class GetOneArticleSuccess implements Action {
  readonly type = ArticlesActionTypes.GetOneArticleSuccess;

  constructor(public payload: Article) {}
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

  constructor(public payload: AudienceActivityUpdateSuccessPayload) {}
}

export class AddComment implements Action {
  readonly type = ArticlesActionTypes.AddComment;

  constructor(public payload: CommentPayload) {}
}

export class AddCommentSuccess implements Action {
  readonly type = ArticlesActionTypes.AddCommentSuccess;

  constructor(public payload: AudienceActivityUpdateSuccessPayload) {}
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
  | AddComment
  | AddCommentSuccess;
