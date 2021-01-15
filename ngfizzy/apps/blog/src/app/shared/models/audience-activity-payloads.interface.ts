import { Audience } from './audience.interface';

export interface ApplaudPayload {
  applauds: number;
  articleId: number;
  audience: Audience;
}

export interface CommentPayload {
  articleId: number;
  comment: string;
  audience: Audience;
}

