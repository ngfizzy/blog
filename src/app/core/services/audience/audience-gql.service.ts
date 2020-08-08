import { Injectable } from '@angular/core';
import { Apollo, Mutation } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { FindAudienceResponse } from '../../../shared/models/graphql-responses/';
import * as queries from './queries';
import * as mutations from './mutations';
import { Audience } from '../../../shared/models/';
import { SendMessageResponse } from 'src/app/shared/models/graphql-responses/responses';

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

  sendMessage(audience: Partial<Audience>, message: string) {
      return this.apollo.mutate<SendMessageResponse>({
        mutation: mutations.sendMessage,
        variables: { audience, message }
      }).pipe(map(res => res.data.sendMessage));
    }
}
