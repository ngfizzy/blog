
import * as fromCoreState from '../../core/state';
import * as fromPosts from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface PostsState  extends fromCoreState.CoreState {
  posts: fromPosts.PostsState;
}

const getAllPostsFeatureState = createFeatureSelector<fromPosts.PostsState>(
  'posts',
);

const getOnePostFeatureState = createFeatureSelector<fromPosts.PostsState>(
  'post',
);

export const getAllPosts = createSelector(
  getAllPostsFeatureState,
  (state) => state.posts,
);
