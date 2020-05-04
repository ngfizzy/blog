import { Audience } from './audience.interface';

export interface AudienceActivity {
  audience: Audience;
  applauds?: number;
  articleId: number;
  createdAt: string;
  comments?: Comment[];
}

export interface Comment {
  comment: string;
  createdAt: string;
}
