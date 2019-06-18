import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { postsReducer } from '../posts/state/posts.reducer';

export interface State {
  posts: any[];
}

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
