import { Injectable } from '@angular/core';
import * as fromPosts from './';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, mergeMap, map } from 'rxjs/operators';

import * as postsActions from './posts.actions';
import { PostsService } from '../posts.service';


@Injectable()
export class PostsEffects {
  constructor(
    private store: Store<fromPosts.PostsState>,
    private actions$: Actions,
    private postsService: PostsService) {}

  @Effect()
  getAllPosts$: Observable<Action>  = this.actions$.pipe(
    ofType(postsActions.PostsActionTypes.GetAllPosts),
    mergeMap(() => this.postsService.getAll().pipe(
        map(posts => new postsActions.GetAllPostsSuccess(posts)),
        catchError(error => of(new postsActions.GetAllPostsFailure(error.message)))
    )),
  );

  @Effect()
  getOnePost$: Observable<Action> = this.actions$.pipe(
    ofType(postsActions.PostsActionTypes.GetOnePost),
    mergeMap((postId) => this.postsService.getOne(postId)
      .pipe(
        map((post) => new postsActions.GetOnePostSuccess(post)),
        catchError((error) => of(new postsActions.GetOnePostFailure(error.message)))
      )

    )
  );
}

