import {Apollo} from 'apollo-angular';
import { Injectable } from "@angular/core";


import * as iGqlResponses from  '../poetry-shared/models/graphql-responses';
import * as queries from './queries';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class PoetryGqlService {

  constructor(private apollo: Apollo) {}

  getAllPoems() {
    return this.apollo.query<iGqlResponses.GetPublishedPoems>({
      query: queries.getPublishedPoems,
    }).pipe(map(response => response.data.getPublishedPoems));
  }
}
