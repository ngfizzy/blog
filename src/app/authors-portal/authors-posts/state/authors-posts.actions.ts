import { Action } from '@ngrx/store';
import { Post } from 'src/app/shared/models/post.interface';

export const enum AuthorsPostsActionTypes {
  CreatePost = '[Authors Posts] Create Post',
  CreatePostSuccess = '[Authors Posts] Create Posts Success',
  ChangePostStatus = '[Authors Posts] Change Post Status',
  EditPost = '[Authors Posts] Edit Post',
  EditPostSuccess = '[Authors Posts] Edit Post Success',
  GetPosts = '[Authors Posts] Get Posts',
  GetPostsSuccess = '[Authors Posts] Get Posts Success',
  ViewPost = '[Authors Posts] View Post',
  ViewPostSuccess = '[Authors Posts] View Post Success',
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

  constructor(public payload: Partial<Post>) {}
}

export class CreatePostSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.CreatePostSuccess;

  constructor(public payload: Post) {}
}

export class ChangePostStatus {
  readonly type = AuthorsPostsActionTypes.ChangePostStatus;
  constructor(public readonly payload: 'saving' | 'saved' | 'erred') {}
}


export class EditPost implements Action {
  readonly type = AuthorsPostsActionTypes.EditPost;
  constructor(public payload: { post: Partial<Post>, postId: number }) {}
}

export class EditPostSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.EditPostSuccess;

  constructor(public payload: { posts: Post[], selectedPost: Post }) {}
}

export type AuthorsPostsActions = GetPosts
| GetPostsSuccess
| CreatePost
| CreatePostSuccess
| ChangePostStatus
| EditPost
| EditPostSuccess
| ViewPost
| ViewPostSuccess;
