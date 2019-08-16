import { Action } from '@ngrx/store';
import { LoginCredentials } from '../shared/models';

export const enum AuthorsActionTypes {
  Login = '[Authors] Login',
  LoginSuccess = '[Authors] Login Success',
  LoginFailure = '[Authors] Login Failure',
  ToggleLoginCardActiveState = '[Authors] Toggle Login Card Active State'
}

export class Login implements Action {
  readonly type = AuthorsActionTypes.Login;

  constructor(public payload: LoginCredentials) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthorsActionTypes.LoginSuccess;
}

export class LoginFailure implements Action {
  readonly type = AuthorsActionTypes.LoginFailure;

  /**
   *
   * @param payload Login Error Message
   */
  constructor(public payload: string) {}
}

export class ToggleLoginCardActiveSate implements Action {
  readonly type = AuthorsActionTypes.ToggleLoginCardActiveState;
}
