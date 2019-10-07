import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map } from 'rxjs/operators';

import { AuthorsPostsService } from '../../authors-posts.service';
import * as authorsPostsActions from './authors-posts.actions';

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
    ofType(authorsPostsActions.AuthorsPostsActionTypes.CreatePostSuccess),
    mergeMap((post) => this.postsService.createPost(post).pipe(
      map(createdPost => new  authorsPostsActions.CreatePostSuccess(createdPost))
    )),
  );

  @Effect()
  viewPost$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPostsActions.AuthorsPostsActionTypes.ViewPost),
    map((action) => (action as authorsPostsActions.ViewPost).payload),
    mergeMap(postId => this.postsService.getOnePost(postId)
      .pipe(
        map(post => new authorsPostsActions.ViewPostSuccess(post)),
      )
    )
  );
}
