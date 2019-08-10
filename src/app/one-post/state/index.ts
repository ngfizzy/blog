
import * as fromCoreState from '../../core/state';
import * as fromPosts from './post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface PostsState  extends fromCoreState.CoreState {
  post: fromPosts.PostState;
}

const getOnePostFeatureState = createFeatureSelector<fromPosts.PostState>(
  'post',
);

export const getOnePost = createSelector(
  getOnePostFeatureState,
  (state) => state.post,
);
