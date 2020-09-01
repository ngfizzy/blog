import { LoginResponse, LogoutResponse  } from './responses';

export interface LoginGqlResponse {
  login: LoginResponse
}

export interface  LogoutGqlResponse {
  logout: LogoutResponse;
}
