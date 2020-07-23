import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import * as iGraphqlResponses from '../../authors-portal-shared/models/graphql-responses';
import * as queries from './queries';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DashboardGqlService {

  constructor(private apollo: Apollo) {}

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
}
