import { Tag } from './tag.interface';
import { Category } from './category.interface';
import { AudienceActivity } from './audience-activity.interface';

export interface Article  {
  id: number;
  themeImage?: string;
  authorId: number;
  audienceActivities?: AudienceActivity[];
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
  deletedAt?: string;
  published: boolean;
  tags: Tag[];
  categories: Category[];
}
