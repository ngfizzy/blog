import { Action } from '@ngrx/store';
import { Post } from 'src/app/shared/models/post.interface';

export const enum AuthorsPostsActionTypes {
  CreatePost = '[Authors Posts] Create Post',
  CreatePostSuccess = '[Authors Posts] Create Posts Success',
  EditPost = '[Authors Posts] Edit Post',
  GetPosts = '[Authors Posts] Get Posts',
  GetPostsSuccess = '[Authors Posts] Get Posts Success',
  ViewPost = '[Authors Posts] View Post',
  ViewPostSuccess = '[Authors Posts] View Post Success'
}

export class GetPosts implements Action {
  readonly type = AuthorsPostsActionTypes.GetPosts;

  constructor() {}
}

export class GetPostsSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.GetPostsSuccess;

  constructor(public payload: Post[]) {}
}

export class ViewPost implements Action {
  readonly type = AuthorsPostsActionTypes.ViewPost;

  constructor(public payload: number) {}
}

export class ViewPostSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.ViewPostSuccess;

  constructor(public payload: Post) {}
}

export class CreatePost implements Action {
  readonly type = AuthorsPostsActionTypes.CreatePost;

  constructor(public payload: Post) {}
}

export class CreatePostSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.CreatePostSuccess;

  constructor(public payload: Post) {}
}

export class EditPost implements Action {
  readonly type = AuthorsPostsActionTypes.EditPost;
}

export type AuthorsPostsActions = GetPosts
| GetPostsSuccess
| CreatePost
| CreatePostSuccess
| EditPost
| ViewPost
| ViewPostSuccess;