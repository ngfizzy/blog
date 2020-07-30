import { Injectable } from "@angular/core";
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

import * as iGqlResponses from '../../../shared/models/graphql-responses';
import * as queries from './queries'

@Injectable({ providedIn: 'root' })
export class ArticlesGqlService {
  constructor(private apollo: Apollo) {}

  getAllArticles() {
    return this.apollo.watchQuery<iGqlResponses.GetPublishedArticlesResponse>({
      query: queries.getPublishedArticles,
    }).valueChanges.pipe(map(response => response.data.getPublishedArticles));
  }

}
