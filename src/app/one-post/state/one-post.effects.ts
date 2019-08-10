import { Injectable } from '@angular/core';
import * as fromPosts from './';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';

import * as onePostActions from './one-post.actions';
import { PostsService } from '../../core/posts.service';


@Injectable()
export class PostsEffects {
  constructor(
    private store: Store<fromPosts.PostsState>,
    private actions$: Actions,
    private postsService: PostsService) {}

  @Effect()
  getOnePost$: Observable<Action> = this.actions$.pipe(
    ofType(onePostActions.OnePostActionTypes.GetOnePost),
    mergeMap((postId) => this.postsService.getOne(postId)
      .pipe(
        map((post) => new onePostActions.GetOnePostSuccess(post)),
        catchError((error) => of(new onePostActions.GetOnePostFailure(error.message)))
      )

    )
  );
}
