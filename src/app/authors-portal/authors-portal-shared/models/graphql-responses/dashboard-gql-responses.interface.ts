import { ArticlesResponse } from './articles-response.interface';

export interface GetLast10DraftsResponse {
  getLast10Drafts: ArticlesResponse;
}

export interface GetTop10ArticlesResponse {
  getTop10Articles: ArticlesResponse;
}