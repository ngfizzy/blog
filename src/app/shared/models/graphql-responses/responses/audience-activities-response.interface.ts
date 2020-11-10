import { BaseResponse } from './base-response.interface';
import { AudienceActivity } from '../../audience-activity.interface';

export interface AudienceActivitiesResponse extends BaseResponse {
  activities: [AudienceActivity];
  articleId: number;
}
