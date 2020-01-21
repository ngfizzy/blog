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
    mergeMap(({ postId, tagName }) => this.postsService
      .untagPost(tagName, postId).pipe(
        map(untaggingResult =>
          new authorsPostsActions.UntagPostSuccess(untaggingResult)
        ),
      ),
    ),
  );

  @Effect()
  editPost$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.EditPost),
    map(action => (action as authorsPostsActions.EditPost).payload),
    mergeMap(({ post, postId}) => this.postsService
      .editPost(post, postId).pipe(
        map((editingResult) =>
          new authorsPostsActions.EditPostSuccess(editingResult)
        ),
      )
    )
  );
}
