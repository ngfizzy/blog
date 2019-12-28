import { HttpRequestStatus } from './http-request-status.interface';
import { Model } from './models.interface';

export interface HttpRequestResult {
  httpRequestStatus: HttpRequestStatus;
  [key: string]: Model;
}
