import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AudienceService } from '../audience.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  CoreActionTypes,
  GetCurrentAudience,
  GetCurrentAudienceSuccess,
  GetNavSuccess,
} from './core.actions';
import { map, switchMap } from 'rxjs/operators';
import { CoreService } from '../core.service';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private audienceService: AudienceService,
    private coreService: CoreService,
  ) {}

  @Effect()
  getCurrentAudience$: Observable<Action> = this.actions$.pipe(
    ofType(CoreActionTypes.GetCurrentAudience),
    map(action => action as GetCurrentAudience),
    switchMap(() =>
      this.audienceService.audience$.pipe(
        map(audience => new GetCurrentAudienceSuccess(audience)),
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
