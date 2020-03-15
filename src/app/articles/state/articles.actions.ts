import { Action } from '@ngrx/store';

import { Article } from '../../shared/models/article.interface';

export const enum ArticlesActionTypes {
  GetAllArticles = '[Articles] Get All Articles',
  GetAllArticlesSuccess = '[Articles] Get All Article Success',
  GetAllArticlesFailure = '[Articles] Get All Article Failure',
  GetOneArticle = '[Articles] Get One Article',
  GetOneArticleSuccess = '[Articles] Get One Article Success',
  GetOneArticleFailure = '[Articles] Get One Article Failure'
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

  constructor(payload: string) {}
}




export type ArticlesActions = GetAllArticles
| GetAllArticlesSuccess
| GetAllArticlesFailure
| GetOneArticle
| GetOneArticleSuccess
| GetOneArticleFailure;
