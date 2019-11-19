import { Action } from '@ngrx/store';

import { Post } from '../../shared/models/post.interface';

export const enum PublicActionTypes {
  GetAllPosts = '[Public] Get All Posts',
  GetAllPostsSuccess = '[Public] Get All Posts Success',
  GetAllPostsFailure = '[Public] Get All Posts Failure',
  GetOnePost = '[Public] Get One Post',
  GetOnePostSuccess = '[Public] Get One Post Success',
  GetOnePostFailure = '[Public] Get One Post Failure'
}

export class GetAllPosts implements Action {
  readonly type = PublicActionTypes.GetAllPosts;
}

export class GetAllPostsSuccess implements Action {
  readonly type = PublicActionTypes.GetAllPostsSuccess;

  constructor(public payload: Post[]) {}
}

export class GetAllPostsFailure implements Action {
  readonly type = PublicActionTypes.GetAllPostsFailure;

  constructor(public payload: string) {}
}

export class GetOnePost implements Action {
  readonly type = PublicActionTypes.GetOnePost;

  constructor(public payload: number) {}
}

export class GetOnePostSuccess implements Action {
  readonly type = PublicActionTypes.GetOnePostSuccess;

  constructor(public payload: Post) {}
}

export class GetOnePostFailure implements Action {
  readonly type = PublicActionTypes.GetOnePostFailure;

  constructor(payload: string) {}
}




export type PublicActions = GetAllPosts
| GetAllPostsSuccess
| GetAllPostsFailure
| GetOnePost
| GetOnePostSuccess
| GetOnePostFailure;
