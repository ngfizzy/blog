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
  TagPost = '[Authosr Posts] Tag Post',
  TagPostSuccess = '[Authors Posts] Tag Post Success',
  UntagPost = '[Authors Posts] Untag Post',
  UntagPostSuccess = '[Authors Posts] Untag Post Success',
  EditPostTitle = '[Authors Posts] Edit Post Title',
  EditPostTitleSuccess = '[Authors Posts] Edit Post Title Success',
  EditPostBody = '[Authors Posts] Edit Post Body',
  EditPostBodySuccess = '[Authors Posts] Edit Post Body Success',
  CategorizePost = '[Authors Posts] Categorize Post',
  CategorizePostSuccess = '[Authors Posts] Cateogrize Post Success',
  RemovePostFromCategory = '[Authors Posts] Remove Post From Category',
  RemovePostFromCategorySuccess = '[Authors Posts] Remove Post From Category Success',
  TogglePublished = '[Authors Posts] Toggle Published',
  TogglePublishedSuccess = '[Authors Posts] Toggle Published Success',
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

export class EditPostTitle implements Action {
  readonly type = AuthorsPostsActionTypes.EditPostTitle;
  constructor(public payload: { title: string, postId: number }) {}
}

export class EditPostTitleSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.EditPostTitleSuccess;

  constructor(public payload: { posts: Post[], selectedPost: Post }) {}
}

export class EditPostBody implements Action {
  readonly type = AuthorsPostsActionTypes.EditPostBody;

  constructor(public payload: { body: string, postId: number }) {}
}

export class EditPostBodySuccess implements Action {
  readonly type = AuthorsPostsActionTypes.EditPostBodySuccess;

  constructor(public payload: { posts: Post[], selectedPost: Post }) {}
}
export class TagPost implements Action {
  readonly type = AuthorsPostsActionTypes.TagPost;

  constructor(public payload: { tag: string; postId: number}) {}
}

export class TagPostSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.TagPostSuccess;

  constructor(public payload: { posts: Post[]; selectedPost: Post; }) {}
}

export class UntagPost implements Action {
  readonly type = AuthorsPostsActionTypes.UntagPost;

  constructor(public payload: { tagId: number; postId: number; }) {}
}

export class UntagPostSuccess implements Action {
  readonly type  = AuthorsPostsActionTypes.UntagPostSuccess;

  constructor(public payload: { posts: Post[]; selectedPost: Post; }) {}
}

export class CategorizePost implements Action {
  readonly type = AuthorsPostsActionTypes.CategorizePost;

  constructor(public payload: { category: string; postId: number }) {}
}

export class CategorizePostSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.CategorizePostSuccess;

  constructor(public payload: { posts: Post[]; selectedPost: Post; }) {}
}

export class RemovePostFromCategory implements Action {
  readonly type = AuthorsPostsActionTypes.RemovePostFromCategory;

  constructor(public payload: { categoryId: number; postId: number; }) {}
}

export class RemovePostFromCategorySuccess implements Action {
  readonly type = AuthorsPostsActionTypes.RemovePostFromCategorySuccess;

  constructor(public payload: { posts: Post[]; selectedPost: Post }) {}
}

export class TogglePublished implements Action {
  readonly type = AuthorsPostsActionTypes.TogglePublished;

  constructor(public payload: { postId: number }) {}
}

export class TogglePublishedSuccess implements Action {
  readonly type = AuthorsPostsActionTypes.TogglePublishedSuccess;

  constructor(public payload: { posts: Post[]; selectedPost: Post }) {}
}

export type AuthorsPostsActions = GetPosts
| GetPostsSuccess
| CreatePost
| CreatePostSuccess
| ChangePostStatus
| EditPostTitle
| EditPostTitleSuccess
| EditPostBody
| EditPostBodySuccess
| ViewPost
| ViewPostSuccess
| TagPost
| TagPostSuccess
| UntagPost
| UntagPostSuccess
| CategorizePost
| CategorizePostSuccess
| RemovePostFromCategory
| RemovePostFromCategorySuccess
| TogglePublished
| TogglePublishedSuccess;
