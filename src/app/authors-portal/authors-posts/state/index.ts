import * as fromAuthorsPortal from '../../state';
import * as fromAuthorsPortalState from './authors-posts.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface AuthorsPostsState extends fromAuthorsPortal.AuthorsPortalState {
  posts: fromAuthorsPortalState.AuthorsPostsState;
}


const getPostsState = createFeatureSelector<fromAuthorsPortalState.AuthorsPostsState>(
  'posts'
);

export const getPosts = createSelector(
  getPostsState,
  state => state.posts
);

export const viewPostState = createSelector(
  getPostsState,
  state => state.selectedPost,
);

export const viewPost = createSelector(
  viewPostState,
  state => state.post
);

export const isPostLoading = createSelector(
  viewPostState,
  state => state.isLoading
);

export const getPostsLoadingState = createSelector(
  getPostsState,
  state => state.isLoading
);
