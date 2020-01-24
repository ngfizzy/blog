import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map } from 'rxjs/operators';

import { AuthorsPostsService } from '../../authors-posts.service';
import * as authorsPostsActions from './authors-posts.actions';
import { Post } from 'src/app/shared/models';

@Injectable()
export class AuthorsPostsEffects {

  constructor(
    private actions$: Actions,
    private postsService: AuthorsPostsService
  ) {}

  @Effect()
  getPosts$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.GetPosts),
    mergeMap(() => this.postsService.getAllPosts().pipe(
      map(posts => new authorsPostsActions.GetPostsSuccess(posts))
    ))
  );

  @Effect()
  createPosts$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.CreatePost),
    map(action => (action as authorsPostsActions.CreatePost).payload),
    mergeMap((post) => this.postsService.createPost(post).pipe(
      map(createdPost =>
        new  authorsPostsActions.CreatePostSuccess(createdPost),
      )
    )),
  );

  @Effect()
  viewPost$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.ViewPost),
    map((action) => (action as authorsPostsActions.ViewPost).payload),
    mergeMap(postId => this.postsService.getOnePost(postId)
      .pipe(
        map(post => new authorsPostsActions.ViewPostSuccess(post)),
      ),
    ),
  );

  @Effect()
  tagPost$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.TagPost),
    map(action => (action as authorsPostsActions.TagPost).payload),
    mergeMap(({postId, tag}) => this.postsService
      .tagPost(tag, postId).pipe(
        map((postTaggingResult: { posts: Post[], selectedPost: Post }) =>
          new authorsPostsActions.TagPostSuccess(postTaggingResult)
        ),
      ),
    ),
  );

  @Effect()
  untagPost$: Observable<Action>  =  this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.UntagPost),
    map(action => (action as authorsPostsActions.UntagPost).payload),
    mergeMap(({ postId, tagId }) => this.postsService
      .untagPost(tagId, postId).pipe(
        map(untaggingResult =>
          new authorsPostsActions.UntagPostSuccess(untaggingResult)
        ),
      ),
    ),
  );

  @Effect()
  editPostTitle$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.EditPostTitle),
    map(action => (action as authorsPostsActions.EditPostTitle).payload),
    mergeMap(({ title, postId}) => this.postsService
      .editPostTitle(title, postId).pipe(
        map((editingResult) =>
          new authorsPostsActions.EditPostTitleSuccess(editingResult)
        ),
      )
    )
  );

  @Effect()
  editPostBody$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.EditPostBody),
    map(action => (action as authorsPostsActions.EditPostBody).payload),
    mergeMap(({ body, postId }) => this.postsService
      .editPostBody(body, postId).pipe(
        map((postEdit) => (
          new authorsPostsActions.EditPostBodySuccess(postEdit)
        )),
      ),
    ),
  );

  @Effect()
  categorizePost$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.CategorizePost),
    map(action => (action as authorsPostsActions.CategorizePost).payload),
    mergeMap(({postId, category}) => this.postsService
      .categorizePost(postId, category).pipe(
        map((categorizationResult) =>
          new authorsPostsActions.CategorizePostSuccess(categorizationResult)
        )
      ),
    ),
  );

  @Effect()
  removePostFromCategory$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.CategorizePost),
    map(action => (action as authorsPostsActions.RemovePostFromCategory).payload),
    mergeMap(({ postId, categoryId }) => this.postsService
      .removePostFromCategory(postId, categoryId).pipe(
        map((postEdit) => (
          new authorsPostsActions.RemovePostFromCategorySuccess(postEdit)
        )),
      ),
    ),
  );
}
