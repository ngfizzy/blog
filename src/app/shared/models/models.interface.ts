import { Category } from './category.interface';
import { Post } from './post.interface';
import { Tag } from './tag.interface';
import { PostComponentConfig } from './post-component-config.interface';
import { HttpRequestStatus } from './http-request-status.interface';

export type Model = Post
  | Category
  | Tag
  | PostComponentConfig
  | HttpRequestStatus;
