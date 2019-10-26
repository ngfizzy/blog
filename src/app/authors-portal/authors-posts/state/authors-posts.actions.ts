import { Action } from '@ngrx/store';
import { Post } from 'src/app/shared/models/post.interface';

export const enum AuthorsPostsActionTypes {
  CreatePost = '[Authors Posts] Create Post',
  CreatePostSuccess = '[Authors Posts] Create Posts Success',
  EditPost = '[Authors Posts] Edit Post',
  GetPosts = '[Authors Posts] Get Posts',
  EditPostTitle = '[Authors Posts] Edit Post Title',
  EditPostTitleSuccess = '[Authors Posts] Edit Post Title Success',
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

  constructor(public payload: Post) {}
}

export class CreatePostSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.CreatePostSuccess;

  constructor(public payload: Post) {}
}

export class EditPost implements Action {
  readonly type = AuthorsPostsActionTypes.EditPost;
}

export class EditPostTitle implements Action {
  readonly type = AuthorsPostsActionTypes.EditPostTitle;

  constructor(public payload: {title: string, postId: number}) {}
}

export class EditPostTitleSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.EditPostTitleSuccess;

  constructor(public payload: { posts: Post[], selectedPost: Post }) {}
}

export type AuthorsPostsActions = GetPosts
| GetPostsSuccess
| CreatePost
| CreatePostSuccess
| EditPost
| EditPostTitle
| EditPostTitleSuccess
| ViewPost
| ViewPostSuccess;
