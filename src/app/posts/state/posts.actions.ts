import { Action } from '@ngrx/store';
import { Post } from '../models/post.interface';

export const enum PostsActionTypes {
  GetAllPosts = '[Posts] Get All Posts',
  GetAllPostsSuccess = '[Posts] Get All Posts Success',
  GetAllPostsFailure = '[Posts] Get All Posts Failure',
  GetOnePost = '[Post] Get One Post',
  GetOnePostSuccess = '[Posts] Get One Post Success',
  GetOnePostFailure = '[Posts] Get OnePost Failure'
}


export class GetAllPosts implements Action {
  readonly type = PostsActionTypes.GetAllPosts;
}

export class GetAllPostsSuccess implements Action {
  readonly type = PostsActionTypes.GetAllPostsSuccess;

  constructor(public payload: Post[]) {}
}

export class GetAllPostsFailure implements Action {
  readonly type = PostsActionTypes.GetAllPostsFailure;

  constructor(public payload: string) {}
}

export class GetOnePost implements Action {
  readonly type = PostsActionTypes.GetOnePost;

  constructor(public payload: number) {}
}

export class GetOnePostSuccess implements Action {
  readonly type = PostsActionTypes.GetOnePostSuccess;

  constructor(public payload: Post) {}
}

export class GetOnePostFailure implements Action {
  readonly type = PostsActionTypes.GetOnePostFailure;

  constructor(payload: string) {}
}

export type PostsActions = GetAllPosts
| GetAllPostsSuccess
| GetAllPostsFailure
| GetOnePost
| GetOnePostSuccess
| GetOnePostFailure;
