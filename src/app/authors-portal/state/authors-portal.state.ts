import { Post } from 'src/app/shared/models/post.interface';

export interface AuthorsPortalState {
  posts: {
    isLoading: boolean,
    posts: Post[];
  };

  isLoading: boolean;
}
