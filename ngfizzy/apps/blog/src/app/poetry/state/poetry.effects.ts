import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PoetryService } from '../services/poetry.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as poetryActions from './poetry.actions';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { Poem } from '../../shared/models';
import { NextActionService } from '../../core/services/next-action.service';
import { PoemResponse } from '../poetry-shared/models/graphql-responses/responses';

@Injectable()
export class PoetryEffects {
  constructor(
    private actions$: Actions,
    private poetryService: PoetryService,
    private nextAction: NextActionService
  ) {}

  @Effect()
  getAllPoems$: Observable<Action> = this.actions$.pipe(
    ofType(poetryActions.PoetryActionTypes.GetAllPoems),
    mergeMap(() =>
      this.poetryService
        .getAllPoems()
        .pipe(
          map((response) => {
            const nextActions = {
              SuccessAction: poetryActions.GetAllPoemsSuccess,
              ErrorAction: poetryActions.GetAllPoemsError
            };

            return this.nextAction.getNextActions(response, nextActions);
          })
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
        .pipe(map((response: PoemResponse) => {
          const nextError = {
            SuccessAction: poetryActions.GetPoemSuccess,
            ErrorAction: poetryActions.GetPoemError
          };

          return this.nextAction.getNextActions(response, nextError);
        }),
      )
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
