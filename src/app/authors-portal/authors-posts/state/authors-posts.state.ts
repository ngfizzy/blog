import { Post } from 'src/app/shared/models/post.interface';

export interface AuthorsPostsState {
  isLoading: boolean;
  posts: Post[];

  selectedPost: {
    post: Post;
    isLoading: boolean;
    isSaved: boolean;
  };
}
