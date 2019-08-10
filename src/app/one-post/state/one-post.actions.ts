import { Action } from '@ngrx/store';
import { Post } from '../../shared/models/post.interface';

export const enum OnePostActionTypes {
  GetOnePost = '[Post] Get One Post',
  GetOnePostSuccess = '[Posts] Get One Post Success',
  GetOnePostFailure = '[Posts] Get OnePost Failure'
}

export class GetOnePost implements Action {
  readonly type = OnePostActionTypes.GetOnePost;

  constructor(public payload: number) {}
}

export class GetOnePostSuccess implements Action {
  readonly type = OnePostActionTypes.GetOnePostSuccess;

  constructor(public payload: Post) {}
}

export class GetOnePostFailure implements Action {
  readonly type = OnePostActionTypes.GetOnePostFailure;

  constructor(payload: string) {}
}

export type OnePostActions =
| GetOnePost
| GetOnePostSuccess
| GetOnePostFailure;
