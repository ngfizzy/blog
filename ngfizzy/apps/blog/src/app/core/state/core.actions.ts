import { Nav } from './../../shared/models/nav';
import { Action } from '@ngrx/store';
import { AudienceResponse } from '../../shared/models/graphql-responses/responses/audience-response.interface';
import { SendMessagePayload } from '../../shared/models';
import { SendMessageResponse } from '../../shared/models/graphql-responses/responses';

export const enum CoreActionTypes {
  GetCurrentAudience = '[App] Get Current Audience',
  GetCurrentAudienceSuccess = '[App] Get Current Audience Success',
  GetCurrentAudienceError = '[App] Get Current Audience Error',
  SetPageTitle = '[App] Set Page Title',
  GetNav = '[App] Get Nav',
  GetNavSuccess = '[App] Get Nav Success',
  SendMessage = '[App] Contact Author',
  SendMessageSuccess = '[App] Contact Author Success',
  SendMessageError = '[App] Contact Author Error'
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

export class SendMessage implements Action {
  readonly type = CoreActionTypes.SendMessage;

  constructor(public payload: SendMessagePayload) {}
}

export class SendMessageSuccess implements Action {
  readonly type = CoreActionTypes.SendMessageSuccess;

  constructor(public payload: SendMessageResponse) {}
}

export class SendMessageError implements Action {
  readonly type = CoreActionTypes.SendMessageError;

  constructor(public payload: string) {}
}

export type CoreActions =
  | GetCurrentAudience
  | GetCurrentAudienceSuccess
  | GetCurrentAudienceError
  | SetPageTitle
  | GetNav
  | GetNavSuccess
  | SendMessage
  | SendMessageSuccess
  | SendMessageError;
