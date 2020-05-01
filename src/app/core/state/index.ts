import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from './core.state';


const selectCoreState = createFeatureSelector<CoreState>('app');

export const selectAudienceState = createSelector(
  selectCoreState,
  state => state.audienceState
);

export const getAudience = createSelector(
  selectAudienceState,
  state => state.audience
);

export const getAudienceLoadingState = createSelector(
  selectAudienceState,
  state => state.isLoading,
);

export { CoreState } from './core.state';

