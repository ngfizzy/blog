import {BaseResponse} from '@ngfizzy/entities/graphql-responses';

export interface LoginResponse extends BaseResponse {
  token: string;
}

export interface LogoutResponse extends BaseResponse {
  success: boolean;
}
