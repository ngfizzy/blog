import {Apollo, Mutation} from 'apollo-angular';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { FindAudienceResponse } from '@ngfizzy/entities/graphql-responses';
import * as queries from './queries';
import * as mutations from './mutations';
import { Audience } from '@ngfizzy/entities';
import { SendMessageResponse } from '@ngfizzy/entities/graphql-responses';

@Injectable({providedIn: 'root'})
export class AudienceGqlService {
  constructor(private apollo: Apollo) { }

  getAudience(audience: Partial<Audience>) {
    return this.apollo.watchQuery<FindAudienceResponse>({
      query: queries.findAudience,
      variables: {
        audience
      }
    }).valueChanges.pipe(map(response => response.data.findAudience));
  }

  sendMessage(audience: Partial<Audience>, message: string) {
      return this.apollo.mutate<SendMessageResponse>({
        mutation: mutations.sendMessage,
        variables: { audience, message }
      }).pipe(map(res => res.data.sendMessage));
    }
}
