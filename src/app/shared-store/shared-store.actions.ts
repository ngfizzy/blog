import { createAction, props } from '@ngrx/store';
import { ArticlesResponse } from '../shared/models/graphql-responses/responses';

export const enum SharedStoreActionTypes {
  GetFeaturedArticles = '[Shared] Get Featured Articles',
  GetFeaturedArticlesSuccess = '[Shared] Get Featured Articles Success',
  GetFeaturedArticlesError = '[Shared] Get Featured Articles Error'
}


export const getFeaturedArticles = createAction(
  SharedStoreActionTypes.GetFeaturedArticles
);

export const getFeaturedArticlesSuccess = createAction(
  SharedStoreActionTypes.GetFeaturedArticlesSuccess,
  props<ArticlesResponse>(),
);

export const getFeaturedArticlesError = createAction(
  SharedStoreActionTypes.GetFeaturedArticlesError,
  props<{payload: string}>(),
);
