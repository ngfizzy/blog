import { Action } from '@ngrx/store';
import { Audience } from '../../shared/models';

export const enum CoreActionTypes {
  GetCurrentAudience = '[App] Get Current Audience',
  GetCurrentAudienceSuccess = '[App] Get Current Audience Success'
}
export class GetCurrentAudience  implements Action {
  readonly type = CoreActionTypes.GetCurrentAudience;

  constructor() {}
}

export class GetCurrentAudienceSuccess {
  readonly type = CoreActionTypes.GetCurrentAudienceSuccess;

  constructor(public payload: Audience) {}
}

export type CoreActions = GetCurrentAudience
| GetCurrentAudienceSuccess;
