import { AudienceActivity } from '../audience-activity.interface';
import { AudienceActivitiesResponse } from './responses';


export interface ApplaudResponse {
  applaud: AudienceActivitiesResponse;
}

export interface AddCommentResponse {
  addComment: AudienceActivitiesResponse;
}
