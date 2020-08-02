import { Injectable } from "@angular/core";
import { Apollo } from 'apollo-angular';

import * as iGqlResponses from  '../poetry-shared/models/graphql-responses';
import * as queries from './queries';
import { map } from 'rxjs/operators';

@Injectable()
export class PoetryGqlService {

  constructor(private apollo: Apollo) {}

  getAllPoems() {
    return this.apollo.watchQuery<iGqlResponses.GetPublishedPoems>({
      query: queries.getPublishedPoems,
    }).valueChanges.pipe(map(response => response.data.getPublishedPoems));
  }
}
