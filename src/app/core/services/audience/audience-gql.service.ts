import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { FindAudienceResponse } from '../../../shared/models/graphql-responses/';
import * as queries from './queries';
import { Audience } from '../../../shared/models/';

@Injectable({providedIn: 'root'})
export class AudienceGqlService {
  constructor(private apollo: Apollo) { }

  getAudience(audience: Partial<Audience>) {
    return this.apollo.watchQuery<FindAudienceResponse>({
      query: queries.findAudience,
      variables: {
        audience
      }
    }).valueChanges.pipe(map(response => response.data.findAudience))
  }
}
