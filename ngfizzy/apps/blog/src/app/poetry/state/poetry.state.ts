import { Poem, AudienceActivity } from '../../shared/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from '../../core/state';

export interface PoetryState extends CoreState {
  poems: Poem[];
  selectedPoem: {
    isLoading: boolean;
    poem: Poem;
    error: string;
    activitiesState: {
      error: string;
      isLoading: boolean;
      activities: AudienceActivity[];
    };
  };
  error: string;
  isLoading: boolean;
}

const getPoetryState = createFeatureSelector<PoetryState>('poetry');

export const getAllPoems = createSelector(
  getPoetryState,
  (state) => state.poems
);

export const getAllPoemsLoadingState = createSelector(
  getPoetryState,
  (state) => state.isLoading
);

export const getPoem = createSelector(
  getPoetryState,
  (state) => state.selectedPoem.poem
);

export const getPoemLoadingState = createSelector(
  getPoetryState,
  (state) => state.selectedPoem.isLoading
);

export const selectPoemThemeImage = createSelector(getPoem, (poem) =>
  poem ? poem.themeImage : ''
);

export const selectPoemId = createSelector(getPoem, (poem) =>
  poem ? poem.id : null
);
export const getSelectedPoemActivities = createSelector(
  getPoem,
  (poem) => poem.audienceActivities
);
