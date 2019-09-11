import * as fromCoreState from '../../core/state';
import * as fromAuthorsPortalState from './authors-portal.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface DashboardState extends fromCoreState.CoreState {
  authorsPortal: fromAuthorsPortalState.AuthorsPortalState;
}


const getDashboardState = createFeatureSelector<fromAuthorsPortalState.AuthorsPortalState>(
  'authorsPortal'
);

export const getPosts = createSelector(
  getDashboardState,
  state => state.posts.posts,
);

export const getPostsLoadingState = createSelector(
  getDashboardState,
  state => state.posts.isLoading,
);
