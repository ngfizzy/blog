import { Poem } from 'src/app/shared/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface PoetryState {
  isLoading: boolean;
  poems: Poem[];
  selectedPoem: {
    isLoading: boolean;
    poem: Poem;
  };
}

const getPoetryState = createFeatureSelector<PoetryState>(
  'poetry'
);

export const getAllPoems = createSelector(
  getPoetryState,
  state => state.poems,
);

export const getAllPoemsLoadingState = createSelector(
  getPoetryState,
  state => state.isLoading,
);

export const getPoem = createSelector(
  getPoetryState,
  state => state.selectedPoem.poem,
);

export const getPoemLoadingState = createSelector(
  getPoetryState,
  state => state.selectedPoem.isLoading,
);

export const selectPoemThemeImage = createSelector(
  getPoem,
  poem => poem ? poem.themeImage : '',
);

export const selectPoemId = createSelector(
  getPoem,
  poem => poem ? poem.id : null,
);
