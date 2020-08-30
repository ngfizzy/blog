import {BaseResponse} from '../../../../../shared/models/graphql-responses/responses';

export interface LoginResponse extends BaseResponse {
  token: string;
}
