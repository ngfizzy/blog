import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AudienceService } from '../services/audience/audience.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  CoreActionTypes,
  GetCurrentAudience,
  GetCurrentAudienceSuccess,
  GetNavSuccess,
  GetCurrentAudienceError,
} from './core.actions';
import { map, switchMap } from 'rxjs/operators';
import { CoreService } from '../services/core.service';
import { NextActionService } from '../services/next-action.service';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private audienceService: AudienceService,
    private coreService: CoreService,
    private nextAction: NextActionService,
  ) {}

  @Effect()
  getCurrentAudience$: Observable<Action> = this.actions$.pipe(
    ofType(CoreActionTypes.GetCurrentAudience),
    map(action => action as GetCurrentAudience),
    switchMap(() =>
      this.audienceService.audienceResponse$.pipe(
        map(res =>{
          const nextActions ={
            SuccessAction: GetCurrentAudienceSuccess,
            ErrorAction: GetCurrentAudienceError
          };

          return this.nextAction.getNextActions(res, nextActions);
        }),
      ),
    ),
  );

  @Effect()
  getNav$: Observable<Action> = this.actions$.pipe(
    ofType(CoreActionTypes.GetNav),
    switchMap(() =>
      this.coreService.getNav().pipe(map(nav => new GetNavSuccess(nav))),
    ),
  );
}
