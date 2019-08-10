import { Action } from '@ngrx/store';
import { Post } from '../../shared/models/post.interface';

export const enum PostsActionTypes {
  GetAllPosts = '[Posts] Get All Posts',
  GetAllPostsSuccess = '[Posts] Get All Posts Success',
  GetAllPostsFailure = '[Posts] Get All Posts Failure',
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

export type PostsActions = GetAllPosts
| GetAllPostsSuccess
| GetAllPostsFailure;
