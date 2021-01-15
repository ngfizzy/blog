import { Category } from './category.interface';
import { Article } from './article.interface';
import { Tag } from './tag.interface';
import { ArticleComponentConfig } from './article-component-config.interface';
import { HttpRequestStatus } from './http-request-status.interface';

export type Model = Article
  | Category
  | Tag
  | ArticleComponentConfig
  | HttpRequestStatus;
