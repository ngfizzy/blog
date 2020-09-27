import { Audience } from './audience.interface';

export interface AudienceActivity {
  id: number;
  audience: Audience;
  applauds?: number;
  articleId: number;
  createdAt: string;
  comments?: Comment[];
}

export interface Comment {
  comment: string;
  createdAt: string;
  id: number;
  articleId: number;
  audienceId: number;
  isDeleted?: boolean;
}
