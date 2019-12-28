import { Tag } from './tag.interface';
import { Category } from './category.interface';

export interface Post  {
  id: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
  deletedAt?: string;
  published: boolean;
  tags: Tag[];
  categories: Category[];
}
