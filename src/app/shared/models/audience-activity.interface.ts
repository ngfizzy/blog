import { Audience } from './audience.interface';

export interface AudienceActivity {
  audience: Audience;
  applauds?: number;
  deviceUUID: string;
  articleId: string;
}
