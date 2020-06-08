import { Action } from '@ngrx/store';
import { Audience } from '../../shared/models';

export const enum CoreActionTypes {
  GetCurrentAudience = '[App] Get Current Audience',
  GetCurrentAudienceSuccess = '[App] Get Current Audience Success',
  SetPageTitle = '[App] Set Page Title',
}
export class GetCurrentAudience implements Action {
  readonly type = CoreActionTypes.GetCurrentAudience;

  constructor() {}
}

export class GetCurrentAudienceSuccess {
  readonly type = CoreActionTypes.GetCurrentAudienceSuccess;

  constructor(public payload: Audience) {}
}

export class SetPageTitle implements Action {
  readonly type = CoreActionTypes.SetPageTitle;

  constructor(public payload: string) {}
}

export type CoreActions =
  | GetCurrentAudience
  | GetCurrentAudienceSuccess
  | SetPageTitle;
