import { Nav } from './../../shared/models/nav';
import { Action } from '@ngrx/store';
import { Audience } from '../../shared/models';

export const enum CoreActionTypes {
  GetCurrentAudience = '[App] Get Current Audience',
  GetCurrentAudienceSuccess = '[App] Get Current Audience Success',
  SetPageTitle = '[App] Set Page Title',
  GetNav = '[App] Get Nav',
  GetNavSuccess = '[Nav] Get Nav Success',
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

export class GetNav implements Action {
  readonly type = CoreActionTypes.GetNav;

  constructor() {}
}

export class GetNavSuccess implements Action {
  readonly type = CoreActionTypes.GetNavSuccess;

  constructor(public payload: Nav) {}
}

export type CoreActions =
  | GetCurrentAudience
  | GetCurrentAudienceSuccess
  | SetPageTitle
  | GetNav
  | GetNavSuccess;
