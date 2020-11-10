import { Audience } from '../../audience.interface';
import { BaseResponse } from './base-response.interface';

export interface AudienceResponse extends BaseResponse {
  audience: Audience;
}
