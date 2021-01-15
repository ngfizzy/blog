import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from './core.state';

const selectCoreState = createFeatureSelector<CoreState>('app');

// Audience(Or reader's) state
export const selectAudienceState = createSelector(
  selectCoreState,
  state => state.audienceState,
);

export const getAudience = createSelector(
  selectAudienceState,
  state => state.audience,
);

export const getAudienceLoadingState = createSelector(
  selectAudienceState,
  state => state.isLoading,
);

export const audienceContacted = createSelector(
  selectAudienceState,
  state => state.contacted
);

export const getPageTitle = createSelector(
  selectCoreState,
  state => state.title,
);

// nav
export const selectNavState = createSelector(
  selectCoreState,
  state => state.navState,
);

export const getNav = createSelector(selectNavState, state => state.nav);

export { CoreState } from './core.state';
