import { Post } from '../../shared/models/post.interface';

export interface PublicState {
  posts: Post[];
  selectedPost: {
    post: Post;
    isLoading: boolean;
  };
  isLoading: boolean;
}
