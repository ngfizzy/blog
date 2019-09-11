import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map } from 'rxjs/operators';

import { AuthorsPostsService } from '../authors-posts.service';
import * as authorsPortalActions from './authors-portal.actions';

@Injectable()
export class AuthorsPortalEffects {

  constructor(
    private actions$: Actions,
    private postsService: AuthorsPostsService
  ) {}

  @Effect()
  getPosts$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPortalActions.AuthorsPortalActionTypes.GetPosts),
    mergeMap(() => this.postsService.getAllPosts().pipe(
      map(posts => new authorsPortalActions.GetPostsSuccess(posts))
    ))
  );

  @Effect()
  createPosts$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPortalActions.AuthorsPortalActionTypes.CreatePostSuccess),
    mergeMap((post) => this.postsService.createPost(post).pipe(
      map(createdPost => new  authorsPortalActions.CreatePostSuccess(createdPost))
    )),
  );
}
