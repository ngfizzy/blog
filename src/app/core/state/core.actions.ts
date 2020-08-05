import { Nav } from './../../shared/models/nav';
import { Action } from '@ngrx/store';
import { Audience } from '../../shared/models';
import { AudienceResponse } from 'src/app/shared/models/graphql-responses/responses/audience-response.interface';

export const enum CoreActionTypes {
  GetCurrentAudience = '[App] Get Current Audience',
  GetCurrentAudienceSuccess = '[App] Get Current Audience Success',
  GetCurrentAudienceError = '[App] Get Current Audience Error',
  SetPageTitle = '[App] Set Page Title',
  GetNav = '[App] Get Nav',
  GetNavSuccess = '[App] Get Nav Success',
  SubmitContact = '[App] Submit Contact',
  SubmitContactSuccess = '[App] Submit Contact Success',
  SubmitContactError = '[App] Submit Contact Error'
}
export class GetCurrentAudience implements Action {
  readonly type = CoreActionTypes.GetCurrentAudience;

  constructor() {}
}

export class GetCurrentAudienceSuccess {
  readonly type = CoreActionTypes.GetCurrentAudienceSuccess;

  constructor(public payload: AudienceResponse) {}
}

export class GetCurrentAudienceError {
  readonly type = CoreActionTypes.GetCurrentAudienceError;

  constructor(public payload: string) {}
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
  | GetCurrentAudienceError
  | SetPageTitle
  | GetNav
  | GetNavSuccess;
