import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PoetryService } from '../poetry.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as poetryActions from './poetry.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Poem } from 'src/app/shared/models';

@Injectable()
export class PoetryEffects {
  constructor(
    private actions$: Actions,
    private poetryService: PoetryService,
  ) { }

  @Effect()
  getAllPoems$: Observable<Action> = this.actions$.pipe(
    ofType(poetryActions.PoetryActionTypes.GetAllPoems),
    mergeMap(() => this.poetryService.getAllPoems().pipe(
      map((poems: Poem[]) => new poetryActions.GetAllPoemsSuccess(poems)),
    )),
  );

  @Effect()
  getPoem$: Observable<Action> = this.actions$.pipe(
    ofType(poetryActions.PoetryActionTypes.GetPoem),
    map(action => (action as poetryActions.GetPoem).payload),
    mergeMap((poemId) => this.poetryService.getPoem(poemId).pipe(
      map((poem: Poem) => new poetryActions.GetPoemSuccess(poem)),
    )),
  );
}
