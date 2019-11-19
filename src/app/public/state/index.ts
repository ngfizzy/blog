import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCoreState from '../../core/state';
import * as fromPublic from './public.state';

export interface PublicState  extends fromCoreState.CoreState {
  public: fromPublic.PublicState;
}

const getPublicFeatureState = createFeatureSelector<fromPublic.PublicState>(
  'public',
);

export const getOnePost = createSelector(
  getPublicFeatureState,
  state => state.selectedPost,
);

export const selectPublicModuleLoadingState = createSelector(
  getPublicFeatureState,
  state => state.isLoading,
);

export const selectPostLoadingState = createSelector(
  getOnePost,
  state => state.isLoading
);

export const selectPost = createSelector(
  getOnePost,
  state => state.post,
);

export const getAllPosts = createSelector(
  getPublicFeatureState,
  state => state.posts,
);
