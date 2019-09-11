import { Action } from '@ngrx/store';
import { Post } from 'src/app/shared/models/post.interface';

export const enum AuthorsPortalActionTypes {
  CreatePost = '[Authors] Create Post',
  CreatePostSuccess = '[Authors] Create Posts Success',
  EditPost = '[Authors] Edit Post',
  GetPosts = '[Authors] Get Posts',
  GetPostsSuccess = '[Authors] Get Posts Success',
  ViewPost = '[Authors] ViewPost',
}

export class GetPosts implements Action {
  readonly type = AuthorsPortalActionTypes.GetPosts;

  constructor() {}
}

export class GetPostsSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.GetPostsSuccess;

  constructor(public payload: Post[]) {}
}

export class ViewPost implements Action {
  readonly type = AuthorsPortalActionTypes.GetPosts;

  constructor(public payload: string) {}
}

export class CreatePost implements Action {
  readonly type = AuthorsPortalActionTypes.CreatePost;

  constructor(public payload: Post) {}
}

export class CreatePostSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.CreatePostSuccess;

  constructor(public payload: Post) {}
}

export class EditPost implements Action {
  readonly type = AuthorsPortalActionTypes.EditPost;
}

export type AuthorsPortalActions = GetPosts
| GetPostsSuccess
| CreatePost
| CreatePostSuccess
| EditPost
| ViewPost;
