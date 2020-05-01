import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AudienceService } from '../audience.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { CoreActionTypes, GetCurrentAudience, GetCurrentAudienceSuccess } from './core.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private audienceService: AudienceService,
  ) {}

  @Effect()
  getCurrentAudience$: Observable<Action> = this.actions$.pipe(
    ofType(CoreActionTypes.GetCurrentAudience),
    map(action => (action as GetCurrentAudience)),
    switchMap(() => this.audienceService.audience$.pipe(
      map(audience => new GetCurrentAudienceSuccess(audience))
    ))
  );
}
