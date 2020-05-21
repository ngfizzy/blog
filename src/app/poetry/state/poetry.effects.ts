import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PoetryService } from '../poetry.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as poetryActions from './poetry.actions';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { Poem } from 'src/app/shared/models';

@Injectable()
export class PoetryEffects {
  constructor(
    private actions$: Actions,
    private poetryService: PoetryService
  ) {}

  @Effect()
  getAllPoems$: Observable<Action> = this.actions$.pipe(
    ofType(poetryActions.PoetryActionTypes.GetAllPoems),
    mergeMap(() =>
      this.poetryService
        .getAllPoems()
        .pipe(
          map((poems: Poem[]) => new poetryActions.GetAllPoemsSuccess(poems))
        )
    )
  );

  @Effect()
  getPoem$: Observable<Action> = this.actions$.pipe(
    ofType(poetryActions.PoetryActionTypes.GetPoem),
    map((action) => (action as poetryActions.GetPoem).payload),
    mergeMap((poemId) =>
      this.poetryService
        .getPoem(poemId)
        .pipe(map((poem: Poem) => new poetryActions.GetPoemSuccess(poem)))
    )
  );

  @Effect()
  applaud$: Observable<Action> = this.actions$.pipe(
    ofType(poetryActions.PoetryActionTypes.Applaud),
    map((action) => (action as poetryActions.Applaud).payload),
    switchMap((payload) =>
      this.poetryService
        .applaud(payload)
        .pipe(map((activities) => new poetryActions.ApplaudSuccess(activities)))
    )
  );

  @Effect()
  addComment$: Observable<Action> = this.actions$.pipe(
    ofType(poetryActions.PoetryActionTypes.AddComment),
    map((action) => (action as poetryActions.AddComment).payload),
    switchMap((payload) =>
      this.poetryService
        .addComment(payload)
        .pipe(
          map((activities) => new poetryActions.AddCommentSuccess(activities))
        )
    )
  );
}
