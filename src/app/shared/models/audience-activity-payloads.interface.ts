import { Audience } from './audience.interface';
import { AudienceActivity } from './audience-activity.interface';

export interface ApplaudPayload {
  applauds: number;
  articleId: number;
  audience: Audience;
}

export interface AudienceActivityUpdateSuccessPayload {
  articleId: number;
  activities: AudienceActivity[];
}
export interface CommentPayload {
  articleId: number;
  comment: string;
  audience: Audience;
}

