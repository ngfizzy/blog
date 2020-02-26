import { Injectable } from '@angular/core';
import * as fromPublic from './';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';

import * as publicActions from './public.actions';
import { PostsService } from '../../core/posts.service';


@Injectable()
export class PublicEffects {
  constructor(
    private store: Store<fromPublic.PublicState>,
    private actions$: Actions,
    private postsService: PostsService) {}

  @Effect()
  getAllPosts$: Observable<Action>  = this.actions$.pipe(
    ofType(publicActions.PublicActionTypes.GetAllPosts),
    mergeMap(() => this.postsService.getAll().pipe(
        map(posts => new publicActions.GetAllPostsSuccess(posts)),
        catchError(error => of(new publicActions.GetAllPostsFailure(error.message)))
    )),
  );

  @Effect()
  getOnePost$: Observable<Action> = this.actions$.pipe(
    ofType(publicActions.PublicActionTypes.GetOnePost),
    map(action => (action as publicActions.GetOnePost).payload),
    mergeMap((postId) => this.postsService.getOne(postId)
      .pipe(
        map((post) => new publicActions.GetOnePostSuccess(post)),
        catchError((error) => of(new publicActions.GetOnePostFailure(error.message)))
      ),
    ),
  );
}
