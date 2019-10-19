import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Post  {
  createdAt?: string;
  updatedAt?: string;
  title: string;
  body: string;
}
