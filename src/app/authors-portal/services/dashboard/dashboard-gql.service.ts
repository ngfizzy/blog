import {Apollo} from 'apollo-angular';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import * as queries from './queries';
import * as mutations from './mutations';
import * as iGraphqlResponses from '../../authors-portal-shared/models/graphql-responses';
@Injectable()
export class DashboardGqlService {

  constructor(private apollo: Apollo) {}

  createCategory(categoryName: string) {
    return this.apollo.mutate<iGraphqlResponses.CreateCategoryResponse>({
      mutation: mutations.createCategory,
      variables: {
        categoryName,
      }
    }).pipe(map(response => response.data.createCategory));
  }

  getLast10Drafts() {
    return this.apollo.watchQuery<iGraphqlResponses.GetLast10DraftsResponse>({
      query: queries.getLast10Drafts
    }).valueChanges.pipe(map(response => response.data.getLast10Drafts));
  }

  getTop10Articles() {
    return this.apollo.watchQuery<iGraphqlResponses.GetTop10ArticlesResponse>({
      query: queries.getTop10Articles,
    }).valueChanges.pipe(map(response => response.data.getTop10Articles));
  }

  getDashboardStatistics() {
    return this.apollo.watchQuery<iGraphqlResponses.GetDashboardStatisticsResponse>({
      query: queries.getDashboardStatistics
    })
    .valueChanges.pipe(map(response => response.data.getDashboardStatistics));
  }

  getCategoriesSummaries() {
    return this.apollo.watchQuery<iGraphqlResponses.GetCategoriesSummariesResponse>({
      query: queries.getCategoriesSummaries,
    }).valueChanges.pipe(map(response => response.data.getCategoriesSummaries))
  }
}
